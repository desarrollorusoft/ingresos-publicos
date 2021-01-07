@ECHO OFF
cd /d .\dist\ingresos-publicos\
mkdir .\inicio\assets\css
mkdir .\inicio\assets\data
mkdir .\inicio\assets\js
mkdir .\inicio\assets\png
mkdir .\inicio\assets\svg
mkdir .\inicio\assets\font
ECHO DIRECTORIOS CREADOS
ECHO ---------------------------------------

MOVE .\*.js .\inicio\
MOVE .\*.ico .\inicio\
MOVE .\*.txt .\inicio\
MOVE .\*.css .\inicio\
MOVE .\assets\css\* .\inicio\assets\css\
MOVE .\assets\data\* .\inicio\assets\data\
MOVE .\assets\js\* .\inicio\assets\js\
MOVE .\assets\png\* .\inicio\assets\png\
MOVE .\assets\svg\* .\inicio\assets\svg\
MOVE .\assets\font\* .\inicio\assets\font\
rmdir /Q /S .\assets\
ECHO ESTRUCTURA CREADA!
ECHO ---------------------------------------

for /f "skip=1" %%x in ('wmic os get localdatetime') do if not defined MyDate set MyDate=%%x
set name=dist_%MyDate:~0,4%-%MyDate:~4,2%-%MyDate:~6,2%_%MyDate:~8,2%-%MyDate:~10,2%
ECHO NOMBRE DEFINIDO!
ECHO ---------------------------------------
ECHO %name%
PAUSE