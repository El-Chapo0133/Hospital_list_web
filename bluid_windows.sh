#!/bin/sh
# Author : Loris Levêque
# Description : build full app for windows

nexe --input 'app.js' --target 'windows-ia32-10.13.0' --output 'app.exe'