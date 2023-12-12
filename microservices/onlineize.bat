@echo off
cd ..
cd retrieve-data

start cmd /c "E:\data\development\nodejs\node_modules\bio-tolerance\retrieve-data\start.bat"
timeout /t 5


cd ..
cd microservices\ddns
start cmd /c "E:\data\development\nodejs\node_modules\bio-tolerance\microservices\ddns\start.bat"
timeout /t 5

pause 
 
