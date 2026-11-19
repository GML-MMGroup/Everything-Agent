# HarmonyOS Sans

Copyright 2021 Huawei Device Co., Ltd.

Official resource page: https://developer.huawei.com/consumer/cn/design/resource/

Official archive used: https://developer.huawei.com/images/download/general/HarmonyOS-Sans.zip

The current resource-page CDN link returned an empty response in this environment. The official archive endpoint above was successfully downloaded and inspected. These four TTF files and `HarmonyOS-Sans-LICENSE.txt` are byte-for-byte copies from that archive. No font conversion, subsetting, or modification was performed. The license file retains the original archive's null padding.

| File                          | SHA-256                                                          |
| ----------------------------- | ---------------------------------------------------------------- |
| HarmonyOS_Sans_Regular.ttf    | 4f00c7e80329238d0b6fc58e5c829c4086432ba9fa1a8c5ca3da9a0442ce0452 |
| HarmonyOS_Sans_Medium.ttf     | f6b009d07d8d894d55eadeb7080b4916c3a2c83ff3ee60bbe851e6698d73bafd |
| HarmonyOS_Sans_SC_Regular.ttf | 297b088424be212207df2ce8b98e335468b782aa6b96832af0b8b773d711e2b1 |
| HarmonyOS_Sans_SC_Medium.ttf  | 6ed1553edccddc48eb27ff25d134a4a715cf54211238d4840b3038576cba1944 |

The website uses the Latin and Simplified Chinese faces under one CSS family with Unicode ranges, in weights 400 and 500. A visible font notice and link to the bundled agreement appear in the website footer.

## English italic faces

The user requested italic English throughout. Two additional, unmodified files were extracted from the same official Huawei archive (`HarmonyOS Sans/HarmonyOS_Sans_Italic/`):

| File                              | SHA-256                                                          |
| --------------------------------- | ---------------------------------------------------------------- |
| HarmonyOS_Sans_Regular_Italic.ttf | 3c90775b60f11328c3a84d7ba75443a667dee7458cef765ceb0fa10badad3c7e |
| HarmonyOS_Sans_Medium_Italic.ttf  | 8035933cb913dd714de3cdcb74044477f9c2ddc315ccea9f81ec1e7f593ae095 |

These are actual italic faces, not synthesized slants. The same bundled HarmonyOS license applies.

Lettown Hills Italic remains unbundled. Its official [Webfonts license](https://www.myfonts.com/products/italic-lettown-hills-15036/licenses) is sold separately; the inspected free download pages state personal-use restrictions. Direct requests to FreeFontDownload and FontsHut returned HTTP 403. No font named Lettown Hills was substituted, relabelled, or claimed as loaded.
