# My Django Vue app for Keenethics
Dont forget to get .env file! It should be placed in root folder.
Application requires a db user to be created for it, set your credentials in .env.


## Development Instructions

To kill existing global mongo process:
- pgrep mongod
- kill <process id>

To run custom mongodb (third-party user probably would not need this step,
but I have custom version of mongo db for django development)
- `cd` into `mongo-v3.6`
- run `./bin/mongod --config ./mongod.conf`

To run project:
- `cd` to project's root
- Enter pipenv shell `pipenv shell`
- Perform `python project/manage.py runserver` or alias `pipenv run start:dev`

To run client side:
- `cd` into `project/client`
- run `npm run serve`

## Deployment Instructions (heroku)

- Checkout to 'deploy' branch
- Adjust client's gitignore so dist folder will be visible
- Adjust main project gitignore to display static filder
- Build client app by `cd` into `project/client` and `npm run build`
- Perform `python ./project/manage.py collectstatic`
- Commit built app
- Do `git push heroku deploy:master`
