#!/usr/bin/env bash

nvm use 18.12.1
timeout /t 10
node webpack --config webpack.config.js
timeout /t 10
