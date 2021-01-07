@ECHO OFF
rmdir /Q /S dist
ECHO DIST ELIMINADO
ng build --prod --base-href /ingresos-publicos/ --deploy-url /ingresos-publicos/ --aot
PAUSE