#!/bin/bash

WORK_DIR=`pwd`
SRC_DIR="${WORK_DIR}/ng-app/app"
DEST_DIR="${WORK_DIR}/site/app"
EXT_PATTERN=".*\(\.min\.js\|\.css\)"

rm -rf ${DEST_DIR} && mkdir -p ${DEST_DIR} && cd ${SRC_DIR}
grunt
find . -type d -name '*' -exec mkdir -p ${DEST_DIR}/{} \;
find . -type f -iregex ${EXT_PATTERN} -exec cp {} ${DEST_DIR}/{} \;
cd -