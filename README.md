# 🎨 web-color-js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> `web-color-js`는 다양한 색상 모델(RGB, HSL, HSV, Hex, HTML Color Name) 간의 유연한 변환과 다양한 색상 유틸을 제공하는 JavaScript 라이브러리입니다.

## ✨ 색상 모델 기능
* **다양한 색상 모델 지원:** `RGBColor`, `HSLColor`, `HSVColor`, `HexColor`, `HtmlColorName` 클래스 제공.
* **유연한 변환:** 각 색상 모델 간의 유연한 변환 메서드 (`toRgb()`, `toHsl()`, `toHsv()`, `toHex()`, `toHtmlColorCode()`, `toCssString()`) 지원.
* **불변성(Immutable) 객체:** 모든 색상 객체는 생성 후 내부 상태가 변경되지 않으며, `with()` 메서드를 통해 새로운 속성으로 새 객체를 반환하여 예측 가능한 동작 보장.

## ✨ 색상 유틸 기능
* **색상 거리 측정:** `calcDistanceColor(srcColor, dstColor, options)`: HSL 색상 공간에서 두 색상 간의 지각적 거리를 계산하며, Hue, Saturation, Lightness에 각각 가중치 적용 가능.

## 📦 CDN (권장 - 빠르고 간편한 사용)
```html
<script src="https://cdn.jsdelivr.net/gh/Arma75/web-color-js@main/web-color.js"></script>
