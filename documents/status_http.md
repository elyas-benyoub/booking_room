# Résumé des Codes de Statut HTTP

Les codes de statut HTTP sont des réponses standardisées données par les serveurs web pour indiquer le résultat d'une requête HTTP. Ils sont regroupés en cinq classes principales.

---

## 1xx : Réponses d'information (Information)

Ces codes indiquent qu'une requête a été reçue et que le processus se poursuit.

* **100 (Continue):** Le serveur a reçu les en-têtes de la requête et le client peut continuer à envoyer le corps de la requête.

---

## 2xx : Succès (Success)

Indique que la requête a été reçue, comprise et acceptée avec succès.

* **200 (OK):** La requête a abouti. C'est le code standard pour une requête réussie (ex: affichage d'une page).
* **201 (Created):** La requête a abouti et une nouvelle ressource a été créée (souvent après un `POST` ou `PUT`).
* **204 (No Content):** La requête a abouti, mais il n'y a pas de contenu à renvoyer (par exemple, après une requête `DELETE` réussie).

---

## 3xx : Redirection (Redirection)

Indique que des actions supplémentaires doivent être entreprises par le client (navigateur) pour compléter la requête.

* **301 (Moved Permanently):** La ressource demandée a été déplacée de façon permanente vers une nouvelle URL. Les moteurs de recherche mettront à jour leurs index.
* **302 (Found):** La ressource a été temporairement déplacée vers une autre URL. Le client doit utiliser l'URL d'origine pour les requêtes futures.
* **304 (Not Modified):** La ressource n'a pas été modifiée depuis la dernière requête (utilisé pour la mise en cache). Le client peut utiliser sa version en cache.

---

## 4xx : Erreurs Client (Client Error)

Indique qu'une erreur semble provenir du client.

* **400 (Bad Request):** Le serveur ne peut pas ou ne veut pas traiter la requête en raison d'une erreur perçue côté client (ex: syntaxe malformée, taille de fichier excessive).
* **401 (Unauthorized):** L'authentification est requise pour accéder à la ressource. Le client n'est pas (ou pas encore) authentifié.
* **403 (Forbidden):** Le client n'a pas les droits d'accès au contenu, même s'il est authentifié. L'authentification ne fera pas de différence.
* **404 (Not Found):** Le serveur n'a pas trouvé la ressource demandée (la page ou l'API n'existe pas).
* **429 (Too Many Requests):** L'utilisateur a envoyé trop de requêtes dans un laps de temps donné (limitation de débit ou "rate limiting").

---

## 5xx : Erreurs Serveur (Server Error)

Indique que le serveur n'a pas réussi à traiter une requête apparemment valide.

* **500 (Internal Server Error):** Une erreur générique du serveur qui n'entre dans aucune autre catégorie. C'est souvent le signe d'un bug dans le code de l'application (ex: une erreur PHP, Python, etc. non gérée).
* **502 (Bad Gateway):** Le serveur, agissant comme une passerelle ou un proxy, a reçu une réponse invalide du serveur amont (ex: le service PHP-FPM est planté).
* **503 (Service Unavailable):** Le serveur est actuellement indisponible (par exemple, en maintenance planifiée ou surchargé).
* **504 (Gateway Timeout):** Le serveur, agissant comme une passerelle, n'a pas reçu de réponse à temps du serveur amont.