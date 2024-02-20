#!/usr/bin/env bash

nvm use 18.12.1
timeout /t 10
node db_clean.js
timeout /t 10
