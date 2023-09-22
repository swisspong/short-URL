# Setup Project
## Clone Project and Run Docker Compose
## First step: clone project

```
git clone https://github.com/swisspong/short-URL.git
```
## Second step create .env file
create .env file in `./backend/apps/auth`
```
DATABASE_HOST="localhost"
DATABASE_PORT=3306
DATABASE_USERNAME="root"
DATABASE_PASSWORD="root"
DATABASE_NAME="short_url"
PORT=8000
JWT_SECRET="fdlaskfjdlasfjlsadfdasfdasdfkjasfd"
```
create .env file in `./backend/apps/short_url`
```
DATABASE_HOST="localhost"
DATABASE_PORT=3306
DATABASE_USERNAME='root'
DATABASE_PASSWORD='root'
DATABASE_NAME="short_url"
PORT=8001
JWT_SECRET="fdlaskfjdlasfjlsadfdasfdasdfkjasfd"
```
## Third step start project
```
cd short-URL
docker compose up -d
```
## Micorservice Architecture

![This is an alt text.](/architecture.png)
## Data flow diagram

![This is an alt text.](/dfd-diagram.png)
## ER diagram

![This is an alt text.](/er-diagram.png)