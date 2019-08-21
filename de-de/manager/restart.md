<!-- TITLE: VisionR Manager neu starten -->
<!-- SUBTITLE: Neu starten des VisionR Server Dienstes über den Manager -->

Es gibt zwei Methoden den VisionR Server Dienst neu zu starten, falls Sie neue Version eingespielt haben oder der Dienst sich aus irgendeinem Grund (z.B. Windows Update) aufgehängt hat.
# Über den Dienst-Manager in Windows
Bei dierse Methode müssen Sie über Administratorenrechte auf der Servermschine verfügen. Um den Diest neu zu starten, müssen Sie den Windows Dienstemanager öffnen. Den Dienst-Manager können Sie in der Windows-Verwaltung finden oder per CMD Kommando "Services.msc" aufrufen. Im geöffneten Dienst-Manager müssen Sie den Dienst "VisionR Server Manager 6" (Dienstname "visionrservermanager6.exe") in der Liste finden und diesen mit der rechten Maustaste neu starten.

*Bild 1: Restart Manager von Windows Disnt-Manager
![Manager Restart Windows](/uploads/manager/manager-restart-windows.jpg "Manager Restart Windows")
# Mit Web-Zugang über den VisionR Manager
Bei diese Methode müssen Sie den VisionR Manager im Browser aufrufen. Dazu können Sie http oder falls eingerichtet https nutzen. Bitte beachten Sie den Port, der bei der Installation für den Manager eingerichtet wurde (standardmäßig 8282 für http und 8283 für https).
Nachdem Sie sich als admin eingeloggt haben, können Sie den VisionR Manager Dienst über den roten Button "RESTART" im oberen rechten Bereich den Dienst neu starten (siehe Screenshot).

*Bild 2: Restart Manager über Web-Zugang
![Manager Restart](/uploads/manager/manager-restart.jpg "Manager Restart")