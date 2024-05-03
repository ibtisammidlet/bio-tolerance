@echo off
start cmd /c "E:\data\development\nodejs\node_modules\bio-tolerance\paywell\db_clean.js.bat"
timeout /t 60


cd ..
cd ..
cd biotune\frontend
start cmd /c "E:\data\development\nodejs\node_modules\biotune\frontend\start.bat"
timeout /t 60


start cmd /c "E:\data\development\nodejs\node_modules\biotune\frontend\gumroad.js.adding_new_line.js.bat"
timeout /t 60


cd ..
cd ..
cd bio-tolerance\paywell
start cmd /c "E:\data\development\nodejs\node_modules\bio-tolerance\paywell\gumroad_rulesets_updater.js.bat"
timeout /t 60
