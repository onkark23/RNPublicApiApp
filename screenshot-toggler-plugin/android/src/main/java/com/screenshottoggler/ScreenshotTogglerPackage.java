package com.screenshottoggler;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.uimanager.ViewManager;
import java.util.Collections;
import java.util.List;
import java.util.ArrayList;
import android.content.Context;

public class ScreenshotTogglerPackage implements ReactPackage {
  @Override
  public List<NativeModule> createNativeModules(Context context) {
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new ScreenshotTogglerModule(context));
    return modules;
  }

  @Override
  public List<ViewManager> createViewManagers(Context context) {
    return Collections.emptyList();
  }
}
