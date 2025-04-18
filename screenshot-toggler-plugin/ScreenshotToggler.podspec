Pod::Spec.new do |s|
  s.name         = "ScreenshotToggler"
  s.version      = "1.0.0"
  s.summary      = "React Native plugin to enable/disable screenshots"
  s.description  = "Custom RN plugin for screenshot toggle via native code"
  s.homepage     = "https://example.com/screenshot-toggler"
  s.license      = "MIT"
  s.author       = { "YourName" => "you@example.com" }
  s.source       = { :path => "." }

  s.platform     = :ios, "12.0"
  s.requires_arc = true
  s.swift_version = "5.0"

  s.source_files = "ios/**/*.{h,m,swift}"
  s.public_header_files = "ios/**/*.h"

  # Add React Native dependencies
  s.dependency "React-Core"
end
