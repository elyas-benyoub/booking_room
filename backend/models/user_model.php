<?php 

// Reste inchangé, mais doit maintenant pointer vers votre classe DataBase en version PDO
require_once MODEL_PATH . "/database_model.php"; 

class User
{
    // Le type de $db est maintenant PDO
    private PDO $db; 
    private $id = null;
    public $username = null;
    public $email = null;
    public $firstname = null;
    public $lastname = null;


    public function __construct(?array $data = null)
    {
        $this->db = Database::getConnexion();
        
        // mysqli_report() n'est plus nécessaire. 
        // La classe Database de PDO gère déjà les exceptions.

        if ($data) {
            $this->id = $data['id'] ?? null;
            $this->username = $data['username'] ?? null;
            $this->email = $data['email'] ?? null;
            $this->firstname = $data['firstname'] ?? null;
            $this->lastname = $data['lastname'] ?? null;
        }
    }

    /**
     * Méthode privée pour exécuter des requêtes PDO.
     * Le paramètre $types de mysqli n'est plus nécessaire.
     */
    private function run_query(string $sql, array $params = []): PDOStatement
    {
        $stmt = $this->db->prepare($sql);
        $stmt->execute($params);
        return $stmt;
    }

    public function isConnected(): bool
    {
        if (empty($this->id))
            return false;

        try {
            $query = "select id from users where id = ?";
            // $types ("i") n'est plus requis
            $stmt = $this->run_query($query, [$this->id]); 
            
            // En PDO, on utilise rowCount() au lieu de get_result()->num_rows
            return $stmt->rowCount() === 1; 
        } catch (PDOException $e) { // Changé en PDOException
            return false;
        }

    }

    public function findUser(string $username, ?string $email)
    {
        try {
            $query = "select username, email from users where email = ? or username = ?";
            $stmt = $this->run_query($query, [$email, $username]);
            
            return $stmt->rowCount() > 0;
        } catch (PDOException $e) {
            echo "Erreur DB emailExists(): " . $e->getMessage();
            return false;
        }
    }

    public function getAllInfos()
    {
        return [
            "id" => $this->id,
            "username" => $this->username,
            "email" => $this->email,
            "firstname" => $this->firstname,
            "lastname" => $this->lastname
        ];
    }

    public function register($data)
    {
        extract($data);
        
        if (empty($username) || empty($password) || empty($email) || empty($firstname) || empty($lastname)) {
            return [
                "status" => "error",
                "message" => "Veuillez remplir tous les champs."
            ];
        }

        if ($this->findUser($username, $email)) {
            return [
                "status" => "error",
                "message" => "Cette utilisateur existe déjà."
            ];
        }

        try {
            $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
            
            // J'ai supposé que votre colonne se nomme 'password_hash'
            $stmt = $this->run_query(
                "insert into users (username, password_hash, email, firstname, lastname) values (?, ?, ?, ?, ?)",
                [$username, $hashedPassword, $email, $firstname, $lastname]
            );

            if ($stmt) {
                // En PDO, on utilise lastInsertId()
                $this->id = $this->db->lastInsertId(); 
                $this->username = $username;
                $this->email = $email;
                $this->firstname = $firstname;
                $this->lastname = $lastname;
            }

            return [
                "status" => "success",
                "message" => "Inscription réussie.",
                "data" => $this->getAllInfos()
            ];
        } catch (PDOException $e) {
            return [
                "status" => "error",
                "message" => "Erreur DB register(): " . $e->getMessage()
            ];
        }
    }

    public function connect(string $username, string $password)
    {
        try {
            // CORRECTION: La requête "where ? = username" est corrigée en "where username = ?"
            $stmt = $this->run_query(
                "select * from users where username = ?",
                [$username]
            );
            
            // En PDO, on utilise fetch() (fetch_assoc est défini par défaut dans Database)
            $userData = $stmt->fetch();

            if (!$userData) {
                return [
                    "status" => "error",
                    "message" => "Utilisateur introuvable."
                ];
            }

            // CORRECTION: Le champ est 'password_hash' (basé sur register()), pas 'password'
            if (!password_verify($password, $userData['password_hash'])) {
                return [
                    "status" => "error",
                    "message" => "Mot de passe incorrect."
                ];
            }

            $this->id = $userData['id'];
            $this->username = $userData['username'];
            $this->email = $userData['email'];
            $this->firstname = $userData['firstname'];
            $this->lastname = $userData['lastname'];

            return [
                "status" => "success",
                "message" => "Connexion réussie à $this->username.",
                "data" => $this->getAllInfos()
            ];
        } catch (PDOException $e) {
            return [
                "status" => "error",
                "message" => "Erreur DB connect(): " . $e->getMessage()
            ];
        }
    }

    public function disconnect()
    {
        $this->id = null;
        $this->username = null;
        $this->email = null;
        $this->firstname = null;
        $this->lastname = null;

        return [
            "status" => "success",
            "message" => "Vous avez été déconnecté"
        ];
    }

    public function delete()
    {
        try {
            // Simplifié pour utiliser run_query
            $stmt = $this->run_query("delete from users where username = ?", [$this->username]);

            if ($stmt->rowCount() > 0) {
                $this->disconnect();
                return [
                    "status" => "success",
                    "message" => "Le profile à été supprimé."
                ];
            } else {
                return [
                    "status" => "error",
                    "message" => "Échec de la suppression (utilisateur non trouvé)."
                ];
            }
        } catch (PDOException $e) {
            return [
                "status" => "error",
                "message" => "Erreur DB delete(): " . $e->getMessage()
            ];
        }
    }

    public function update($username, $email, $firstname, $lastname)
    {
        try {
            // CORRECTION: Votre code d'origine préparait/exécutait la requête plusieurs fois.
            // Voici la version corrigée qui utilise run_query() une seule fois.
            $stmt = $this->run_query(
                "
                update users
                set username = ?,
                    email = ?,
                    firstname = ?,
                    lastname = ?
                where id = ?
                ",
                [$username, $email, $firstname, $lastname, $this->id]
            );

            // On vérifie si une ligne a été affectée
            if ($stmt->rowCount() > 0) { 
                $this->username = $username;
                $this->email = $email;
                $this->firstname = $firstname;
                $this->lastname = $lastname;

                return [
                    "status" => "success",
                    "message" => "Le profile à été modifié.",
                    "data" => $this->getAllInfos()
                ];
            } else {
                return [
                    "status" => "error",
                    "message" => "Échec de la modification (ou aucune donnée n'a changé)."
                ];
            }
        } catch (PDOException $e) {
            return [
                "status" => "error",
                "message" => "Erreur DB update(): " . $e->getMessage()
            ];
        }
    }
}