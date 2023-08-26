#!/usr/bin/env bash

nvm use 18.12.1
timeout /t 10
node rest_receiver.js
