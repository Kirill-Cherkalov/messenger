### Start with yarn:
```
# Instalation
$ yarn install
$ cp .env.example .env
$ yarn migrate

# Run in development mode
$ yarn start:dev

# Run in debugger mode
$ yarn start:debug

# Run in production mode
$ yarn start:prod
```

### Logging
```
# Clear logs
$ yarn pm2 flush

# Log output
$ yarn pm2 logs
```

### Debugging in VSCode
More information about debugging using VSCode
[here](https://go.microsoft.com/fwlink/?linkid=830387).
Create configuration using bash:
```
# Create directory with configurations if not exists
$ mkdir -p .vscode

# Create file and write configuration
$ cat >> .vscode/launch.json << EOM
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach debbuger to start:debug script",
      "restart": true,
      "protocol": "inspector",
      "port": 9229
    }
  ]
}
EOM
```
