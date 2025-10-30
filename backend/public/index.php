<?php

// --- 1. Configuration initiale et Sécurité ---

// A. Définir les Headers CORS (TRÈS IMPORTANT pour React)
// Cela autorise le frontend React à communiquer avec le backend API.
header("Access-Control-Allow-Origin: http://localhost:5173"); 
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// B. Gérer la requête "Preflight" OPTIONS
// Le navigateur envoie OPTIONS avant POST/PUT pour vérifier les permissions.
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); // Répondre OK
    exit();
}

date_default_timezone_set('Europe/Paris');
session_start();

// --- 3. Définition des Constantes ---

define('ROOT_PATH', dirname(__DIR__));
define('APP_NAME', 'Salle_de_revervation');
define('APP_VERSION', '1.0.0');
define('CONFIG_PATH', ROOT_PATH . '/config');
define('CONTROLLER_PATH', ROOT_PATH . '/controllers');
define('MODEL_PATH', ROOT_PATH . '/models');
define('SERVICE_PATH', ROOT_PATH . '/services');
define('CORE_PATH', ROOT_PATH . '/core');
define('PUBLIC_PATH', ROOT_PATH . '/public');


// --- 4. Chargement des fichiers ---

try {
    require_once CONFIG_PATH . '/database.php';
    require_once CONFIG_PATH . '/logs.php';
    require_once SERVICE_PATH . '/helpers.php';
    require_once MODEL_PATH . '/user_model.php';
    require_once MODEL_PATH . '/booking_model.php';
    require_once MODEL_PATH . '/room_model.php';
    require_once MODEL_PATH . '/room_model.php';

} catch (Throwable $e) {
    $errorMessage = 'Erreur fatale du serveur (require failed): ' . $e->getMessage();
    error_log("[FATAL] " . $errorMessage . " dans " . $e->getFile() . " à la ligne " . $e->getLine());
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Erreur fatale du serveur (require failed): ' . $e->getMessage()
    ]);
    exit();
}

// --- 5. LANCEMENT DU ROUTEUR ---

try {
    require_once  CORE_PATH . '/router.php';

} catch (Throwable $e) {
    http_response_code(500);
    error_log("[FATAL] Erreur irrécupérable dans le routeur/contrôleur: " . $e->getMessage());
    echo json_encode(['status' => 'error', 'message' => 'Erreur interne majeure du serveur.']);
    exit();
}
