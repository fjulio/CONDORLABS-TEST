-- DB Test - Condor Labs

-- 1. You are required to get how many active users we have per type, and for each type, the amount of users for whom we don’t have a middle name stored.

SELECT R.cd_role_type AS "User Type",
	   COUNT(P.id_user) AS "Total Active",
	   COUNT(NVL2(P.nm_middle, NULL, 1)) AS "No Middle Name"
FROM User_role R
INNER JOIN User_Profile P ON P.id_user = R.id_user
	AND P.id_user > 0
	AND R.in_status = 1
GROUP BY R.cd_role_type
ORDER BY R.cd_role_type;

-- 2. You are required to get the total active users of types "LICENSEE"​ and "LIMITED"​ that we have address information for.

SELECT COUNT(DISTINCT P.id_user) AS "Active Licensees With Address Info"
FROM User_role R
INNER JOIN User_Profile P ON P.id_user = R.id_user
	AND P.id_user > 0
	AND R.in_status = 1
INNER JOIN User_address A ON P.id_user = A.id_user
WHERE R.cd_role_type IN ('LICENSEE', 'LIMITED');

-- 3. You are required to get the total of non-active users of type "PROVIDER"​.

SELECT COUNT(DISTINCT P.id_user) AS "Non-active Providers"
FROM User_role R
INNER JOIN User_Profile P ON P.id_user = R.id_user
	AND (P.id_user = 0 OR R.in_status != 1)
WHERE R.cd_role_type = 'PROVIDER';
