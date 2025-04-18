import Foundation
import UIKit
import React

@objc(ScreenshotToggler)
class ScreenshotToggler: NSObject {
  @objc
  func toggleScreenshot(_ enable: Bool,
                        resolver resolve: @escaping RCTPromiseResolveBlock,
                        rejecter reject: @escaping RCTPromiseRejectBlock) {
    DispatchQueue.main.async {
      resolve("iOS screenshot control is simulated (no native FLAG_SECURE)")
    }
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
