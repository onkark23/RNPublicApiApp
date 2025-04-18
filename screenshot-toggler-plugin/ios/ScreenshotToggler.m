#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ScreenshotToggler, NSObject)
RCT_EXTERN_METHOD(toggleScreenshot:(BOOL)enable
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
@end
