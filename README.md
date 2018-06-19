In case I forget it again
```
  superuser data is:
  - admin
  - admin
```

## Instructions

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


## Development process

I've finished registration part and now trying to make logging in work
