Elastos虚拟机是提供Dapp运行环境的容器，基于Elastos runtime的可信运行环境，为上层应用提供可靠的运行环境。
Elastos虚拟机为了便于应用开发者，采用兼容ionic2开发框架来支持应用开发。
应用开发者可用直接把基于ionic2的www目录下的文件，来生成DAPP的包. 同一个DAPP可用运行在android,IOS, Windows,MAC等设备上。
ionic 是一个强大的 HTML5 应用程序开发框架(HTML5 Hybrid Mobile App Framework )。可以帮助您使用 Web 技术，
比如 HTML、CSS 和 Javascript 构建接近原生体验的移动应用程序。
ionic 主要关注外观和体验，以及和你的应用程序的 UI 交互，特别适合用于基于 Hybird 模式的 HTML5 移动应用程序开发。
ionic是一个轻量的手机UI库，具有速度快，界面现代化、美观等特点。
Elastos虚拟机具备如下特点
1 兼容Ionic程序运行
2 JS开发者可用直接使用C++组件。
3 Elastos虚拟机的网络请求进行白名单过滤。推荐用户使用Carrier来进行网络请求
4 Dapp提供严格的校验机制。


附件的ElaAPP就是基于ionic的框架来开发的。
除了直接使用ionic 所支持的cordova的插件。Elastos虚拟机还提供基于C++组件的开发模式，让JS开发者可用直接使用C++组件的方法
具体的写法可用参考src\pages\home\home.ts

运行方式
目前的代码是基于Ionic来开发的，可以直接使用chrome浏览器来打开www文件夹下的index.html即可




