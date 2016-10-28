# rise2enrich
HIghschool Web Site



# Setup Instructions
## Check out the Repository
Folder structure should look like this
```
wp-content/
index.php
wp-config.php
```

## Run Composer Install
After running composer your directory should look like the below
```
vendor/
wp/
wp-content/
index.php
wp-config.php
```

## Move wp-config file
this may already be in repo so Skip this step
wp/wp-config.php -> wp-config.php

## Use multi env config files
Move the below files into wp/ folder
and configure the password credentials for DB setup
```
wp-config.default.php
wp-config.development.php
wp-config.env.php
```

## Add .htaccess file
If not already present add this file .htaccess
```
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress

```

## Configure UI
Login to wordpress via browser and finish setup



## Once installed add Timber Plugin via admin UI
https://wordpress.org/plugins/timber-library/
extract wp-content/plugins/timber-library/timber-starter-theme to themes directory


### Reference
https://roots.io/using-composer-with-wordpress/

#### Configure Multi Env
https://github.com/studio24/wordpress-multi-env-config
Need these files, modify and upload only whats needed manually as there are private passwords.

```
wp-config.development.php *Important
wp-config.env.php *Important
wp-config.production.php
wp-config-sample.php
```
