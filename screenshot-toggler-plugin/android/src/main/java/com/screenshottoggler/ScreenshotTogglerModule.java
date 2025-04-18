package com.screenshottoggler;

import android.app.Activity;
import android.view.WindowManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class ScreenshotTogglerModule extends ReactContextBaseJavaModule {

    public ScreenshotTogglerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ScreenshotToggler";
    }

    @ReactMethod
    public void toggleScreenshot(boolean enable, Promise promise) {
        Activity activity = getCurrentActivity();
        if (activity != null) {
            if (enable) {
                activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
            } else {
                activity.getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE,
                                              WindowManager.LayoutParams.FLAG_SECURE);
            }
            promise.resolve("Screenshot " + (enable ? "enabled" : "disabled"));
        } else {
            promise.reject("NO_ACTIVITY", "No active activity found");
        }
    }
}
