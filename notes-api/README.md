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

