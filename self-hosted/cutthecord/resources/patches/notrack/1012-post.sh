#!/bin/bash
mv smali/com/crashlytics smali_classes2/com/
cp -r smali/com/facebook smali_classes2/com/
rm -rf smali/com/facebook
mv smali/com/airbnb smali_classes2/com/
