# Setup api

```
composer install
php bin/console doctrine:database:drop --force
php bin/console doctrine:database:create
php bin/console doctrine:schema:update --force
```

# Graphql

by default its enabled on this url : `http://localhost:8000/api/graphql`

we can use it like this go get all id and name from tags entity
```
{
  tags {
    edges{
      node{
        id
        name
      }
    }
  }
}

```

# Fixture 

coming soon


# Get Production database by ssh 

Create getProdDatabase.sh with the following content 
```
#!/bin/bash
echo "Downloading production database"
ssh root@server_ip 'mysqldump -u root -p notes' > /jenaye/dev/notes/`date +%Y-%m-%d`-notes.sql
echo "**** Download successfully ****"
echo "**** Delete notes and create rebuild new database ****"
mysql --user="root" --password="" --execute='DROP DATABASE IF EXISTS 'notes-new'; CREATE DATABASE `notes-new`;'
echo "**** Now connect to mysql with 'mysql -u root -p' after 'use notes-new' then copy/past this command 'source /jenaye/dev/`date +%Y-%m-%d`-notes.sql'; ****"
echo "**** Think to update u're parameters.yml with notes-new ****"
```



