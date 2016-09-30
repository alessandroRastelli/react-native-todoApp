# react-native-todoApp

# Usage
```
npm install
react-native run-android
```

#to enable the logs
```
adb logcat *:S ReactNative:V ReactNativeJS:V
```

# error “Could not get BatchedBridge, make sure your bundle is packaged properly” on start of app then run
```
react-native start > /dev/null 2>&1 &  
curl "http://localhost:8081/index.android.bundle?platform=android" -o "android/app/src/main/assets/index.android.bundle"
```