<?php

// On s'assure que ce fichier n'est pas appelé directement
if (!defined('ROOT_PATH')) {
    exit('Accès direct non autorisé');
}

class UserController
{
    public function register($method, $param)
    {

        // 1. Vérifier la méthode HTTP
        if ($method !== 'POST') {
            http_response_code(405); // Method Not Allowed
            error_log("[405] Tentative de $method sur /user/register");
            echo json_encode(['status' => 'error', 'message' => 'Méthode non autorisée. Utilisez POST.']);
            return;
        }

        // 2. Récupérer et décoder les données JSON
        $data = json_decode(file_get_contents('php://input'), true);

        // 3. Logger les données reçues (pour le débogage)
        error_log("[USER_REGISTER] Données JSON reçues: " . print_r($data, true));

        // 4. Valider les données
        if (empty($data['email']) || empty($data['password']) || empty($data['username'])) {
            http_response_code(400); // Bad Request
            echo json_encode([
                'status' => 'error',
                'message' => 'Données manquantes. "email", "password" et "username" sont requis.'
            ]);
            return;
        }

        // 5. Appeler le modèle pour créer l'utilisateur
        $userModel = new User();
        $result = $userModel->register($data);

        // 6. Renvoyer une réponse de succès
        http_response_code(201); // 201 Created
        echo json_encode([
            'status' => 'success',
            'message' => 'Utilisateur enregistré avec succès.',
            'data' => $data // Renvoyer les données pour confirmer
        ]);
    }
}