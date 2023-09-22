#!/usr/bin/env bash

nvm use 18.12.1
timeout /t 10
node oauth.js
timeout /t 10
