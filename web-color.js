/**
 * HTML에서 사용하는 색상명 148개의 정보를 정의합니다.
 * 
 * 이 상수는 Object.freeze()를 통해 불변성을 보장합니다
 */
const HTML_COLOR_NAMES = {
    "aliceblue": "#F0F8FF",
    "antiquewhite": "#FAEBD7",
    "aqua": "#00FFFF",
    "aquamarine": "#7FFFD4",
    "azure": "#F0FFFF",
    "beige": "#F5F5DC",
    "bisque": "#FFE4C4",
    "black": "#000000",
    "blanchedalmond": "#FFEBCD",
    "blue": "#0000FF",
    "blueviolet": "#8A2BE2",
    "brown": "#A52A2A",
    "burlywood": "#DEB887",
    "cadetblue": "#5F9EA0",
    "chartreuse": "#7FFF00",
    "chocolate": "#D2691E",
    "coral": "#FF7F50",
    "cornflowerblue": "#6495ED",
    "cornsilk": "#FFF8DC",
    "crimson": "#DC143C",
    "cyan": "#00FFFF",
    "darkblue": "#00008B",
    "darkcyan": "#008B8B",
    "darkgoldenrod": "#B8860B",
    "darkgray": "#A9A9A9",
    "darkgreen": "#006400",
    "darkgrey": "#A9A9A9",
    "darkkhaki": "#BDB76B",
    "darkmagenta": "#8B008B",
    "darkolivegreen": "#556B2F",
    "darkorange": "#FF8C00",
    "darkorchid": "#9932CC",
    "darkred": "#8B0000",
    "darksalmon": "#E9967A",
    "darkseagreen": "#8FBC8F",
    "darkslateblue": "#483D8B",
    "darkslategray": "#2F4F4F",
    "darkslategrey": "#2F4F4F",
    "darkturquoise": "#00CED1",
    "darkviolet": "#9400D3",
    "deeppink": "#FF1493",
    "deepskyblue": "#00BFFF",
    "dimgray": "#696969",
    "dimgrey": "#696969",
    "dodgerblue": "#1E90FF",
    "firebrick": "#B22222",
    "floralwhite": "#FFFAF0",
    "forestgreen": "#228B22",
    "fuchsia": "#FF00FF",
    "gainsboro": "#DCDCDC",
    "ghostwhite": "#F8F8FF",
    "gold": "#FFD700",
    "goldenrod": "#DAA520",
    "gray": "#808080",
    "green": "#008000",
    "greenyellow": "#ADFF2F",
    "grey": "#808080",
    "honeydew": "#F0FFF0",
    "hotpink": "#FF69B4",
    "indianred": "#CD5C5C",
    "indigo": "#4B0082",
    "ivory": "#FFFFF0",
    "khaki": "#F0E68C",
    "lavender": "#E6E6FA",
    "lavenderblush": "#FFF0F5",
    "lawngreen": "#7CFC00",
    "lemonchiffon": "#FFFACD",
    "lightblue": "#ADD8E6",
    "lightcoral": "#F08080",
    "lightcyan": "#E0FFFF",
    "lightgoldenrodyellow": "#FAFAD2",
    "lightgray": "#D3D3D3",
    "lightgreen": "#90EE90",
    "lightgrey": "#D3D3D3",
    "lightpink": "#FFB6C1",
    "lightsalmon": "#FFA07A",
    "lightseagreen": "#20B2AA",
    "lightskyblue": "#87CEFA",
    "lightslategray": "#778899",
    "lightslategrey": "#778899",
    "lightsteelblue": "#B0C4DE",
    "lightyellow": "#FFFFE0",
    "lime": "#00FF00",
    "limegreen": "#32CD32",
    "linen": "#FAF0E6",
    "magenta": "#FF00FF",
    "maroon": "#800000",
    "mediumaquamarine": "#66CDAA",
    "mediumblue": "#0000CD",
    "mediumorchid": "#BA55D3",
    "mediumpurple": "#9370DB",
    "mediumseagreen": "#3CB371",
    "mediumslateblue": "#7B68EE",
    "mediumspringgreen": "#00FA9A",
    "mediumturquoise": "#48D1CC",
    "mediumvioletred": "#C71585",
    "midnightblue": "#191970",
    "mintcream": "#F5FFFA",
    "mistyrose": "#FFE4E1",
    "moccasin": "#FFE4B5",
    "navajowhite": "#FFDEAD",
    "navy": "#000080",
    "oldlace": "#FDF5E6",
    "olive": "#808000",
    "olivedrab": "#6B8E23",
    "orange": "#FFA500",
    "orangered": "#FF4500",
    "orchid": "#DA70D6",
    "palegoldenrod": "#EEE8AA",
    "palegreen": "#98FB98",
    "paleturquoise": "#AFEEEE",
    "palevioletred": "#DB7093",
    "papayawhip": "#FFEFD5",
    "peachpuff": "#FFDAB9",
    "peru": "#CD853F",
    "pink": "#FFC0CB",
    "plum": "#DDA0DD",
    "powderblue": "#B0E0E6",
    "purple": "#800080",
    "rebeccapurple": "#663399",
    "red": "#FF0000",
    "rosybrown": "#BC8F8F",
    "royalblue": "#4169E1",
    "saddlebrown": "#8B4513",
    "salmon": "#FA8072",
    "sandybrown": "#F4A460",
    "seagreen": "#2E8B57",
    "seashell": "#FFF5EE",
    "sienna": "#A0522D",
    "silver": "#C0C0C0",
    "skyblue": "#87CEEB",
    "slateblue": "#6A5ACD",
    "slategray": "#708090",
    "slategrey": "#708090",
    "snow": "#FFFAFA",
    "springgreen": "#00FF7F",
    "steelblue": "#4682B4",
    "tan": "#D2B48C",
    "teal": "#008080",
    "thistle": "#D8BFD8",
    "tomato": "#FF6347",
    "turquoise": "#40E0D0",
    "violet": "#EE82EE",
    "wheat": "#F5DEB3",
    "white": "#FFFFFF",
    "whitesmoke": "#F5F5F5",
    "yellow": "#FFFF00",
    "yellowgreen": "#9ACD32"
};
Object.freeze(HTML_COLOR_NAMES);

class Color {
    /**
     * 다른 객체와 현재 객체의 값이 동일한지 비교합니다
     */
    equals(color) {
        throw new Error("Method 'equals()' must be implemented.");
    }

    /**
     * 현재 객체에서 특정 속성을 업데이트하여 새로운 객체를 반환합니다
     */
    with(obj) {
        throw new Error("Method 'with()' must be implemented.");
    }
}

/**
 * RGB 색상을 다루는 불변(Immutable) 데이터 객체 클래스
 * 생성 후에는 내부 RGB 값을 변경할 수 없으며,
 * 값을 변경하려면 `with` 메서드를 통해 새로운 객체를 생성해야 합니다
 */
class RGBColor extends Color {
    /**
     * 새로운 RGBColor 객체를 생성합니다
     * @param {number|number[]} r - 빨강(Red) 값 (0-255), 배열 [r, g, b] 형태 또는 [r, g, b, a]도 가능
     * @param {number} [g] - 초록(Green) 값 (0-255). 배열 형태일 경우 생략
     * @param {number} [b] - 파랑(Blue) 값 (0-255). 배열 형태일 경우 생략
     * @param {number} [a] - 투명도(Alpha) 값 (0-1). 배열 형태일 경우 생략
     */
    constructor(r = 0, g = 0, b = 0, a = 1) {
        super();
        
        // 인자가 배열 형태로 전달된 경우
        if( Array.isArray(r) ) {
            if( r.length === 3 ) {
                [r, g, b] = r;
            } else if( r.length === 4 ) {
                [r, g, b, a] = r;
            }
        }

        // 각 값을 정규화하고, 유효하지 않은 값인 경우 디폴트 값 지정
        this.r = this._normalizeRgbValue(r);
        this.g = this._normalizeRgbValue(g);
        this.b = this._normalizeRgbValue(b);
        this.a = this._normalizeAlpha(a);

        // 생성된 객체를 불변으로 지정
        Object.freeze(this);
    }

    /**
     * 다른 RGBColor 객체와 현재 객체의 값이 동일한지 비교합니다
     * @param {RGBColor} 비교할 RGBColor 객체
     * @returns {boolean} 값이 동일하면 true, 그렇지 않으면 false, 인자가 RGBColor 객체가 아니면 false
     */
    equals(rgbColor) {
        if( !(rgbColor instanceof RGBColor) ) {
            return false;
        }

        return this.r === rgbColor.r && this.g === rgbColor.g && this.b === rgbColor.b && this.a === rgbColor.a;
    }

    /**
     * 현재 RGBColor 객체의 값을 CSS 문자열 형식으로 반환합니다
     * ex) "rgb(255, 0, 128, 1)"
     * @returns {string} CSS RGB 문자열
     */
    toCssString() {
        if( this.a === 1 ) {
            return `rgb(${this.r}, ${this.g}, ${this.b})`;
        } else {
            return `rgb(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
        }
    }

    /**
     * 현재 RGBColor 객체에서 특정 속성을 업데이트하여 새로운 RGBColor 객체를 반환합니다
     * 원본 객체는 변경되지 않습니다 (불변성 유지)
     * @param {object} 변경할 속성 (r, g, b, a)을 포함하는 객체. ex) { r: 180, g: 70 }
     * @returns {RGBColor} 새로운 RGBColor 객체
     */
    with({r = this.r, g = this.g, b = this.b, a = this.a} = {}) {
        return new RGBColor(r, g, b, a);
    }

    /**
     * 현재 RGBColor 값에 해당하는 신규 HexColor 객체를 반환합니다
     * @returns {HexColor} 현재 RGBColor 값에 해당하는 신규 HexColor 객체
     */
    toHex() {
        return new HexColor([this.r, this.g, this.b].reduce((n, m) => n + (+m).toString(16).padStart(2, "0"), "#"));
    }

    /**
     * 현재 RGBColor 값에 해당하는 신규 HSLColor 객체를 반환합니다
     * @returns {HSLColor} 현재 RGBColor 값에 해당하는 신규 HSLColor 객체
     */
    toHsl() {
        let [r, g, b] = [this.r / 255, this.g / 255, this.b / 255];
        
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        
        let h = 0;
        let s = 0;
        let l = (max + min) / 2;
        
        let d = max - min;
        
        if( d !== 0 ) {
            s = l < 0.5? d / (max + min) : d / (2 - max - min);
            
            switch( max ) {
                case r :
                    h = ((g - b) / d + (g < b? 6 : 0));
                    break;
                case g :
                    h = (b - r) / d + 2;
                    break;
                case b :
                    h = (r - g) / d + 4;
                    break;
            }
        }

        return new HSLColor(h * 60, s, l);
    }

    /**
     * 현재 RGBColor 값에 해당하는 신규 HSVColor 객체를 반환합니다
     * @returns {HSVColor} 현재 RGBColor 값에 해당하는 신규 HSVColor 객체
     */
    toHsv() {
        let [r, g, b] = [this.r / 255, this.g / 255, this.b / 255];
        
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let delta = max - min;
        
        let h = 0;
        let s = 0;
        let v = max;
        
        if( delta !== 0 ) {
            if( max === r ) {
                h = ((g - b) / delta) % 6;
            } else if( max === g ) {
                h = (b - r) / delta + 2;
            } else {
                h = (r - g) / delta + 4;
            }
            
            h = (h * 60 + 360) % 360;
            s = delta / max;
        }
        
        return new HSVColor(h, s, v);
    }

    /**
     * 현재 RGBColor 값에 해당하는 신규 HtmlColorName 객체를 반환합니다
     * @returns {HtmlColorName} 현재 RGBColor 값에 해당하는 신규 HtmlColorName 객체
     */
    toHtmlColorName() {
        return new HtmlColorName(this);
    }

    /**
     * RGB(r|g|b) 값을 0-255 범위로 정규화합니다
     * 숫자가 아니거나 NaN이면 기본값 0을 반환합니다
     * @param {number|string} (r|g|b) - 정규화할 (r|g|b) 값
     * @returns {number} 정규화된 값(숫자)
     * @private
     */
    _normalizeRgbValue(v) {
        v = Number(v);

        if( !isNaN(v) && typeof v === "number" ) {
            return Math.max(0, Math.min(255, v));
        } else {
            return 0;
        }
    }

    /**
     * 투명도(Alpha) 값을 0-1 범위로 정규화합니다
     * 숫자가 아니거나 NaN이면 기본값 1을 반환합니다
     * @param {number|string} a - 정규화할 투명도 값
     * @returns {number} 정규화된 투명도 값(숫자)
     * @private
     */
    _normalizeAlpha(a) {
        if( !isNaN(a) && typeof a === "number" ) {
            return Math.max(0, Math.min(1, a));
        } else {
            return 1;
        }
    }
}

/**
 * Hex 색상을 다루는 불변(Immutable) 데이터 객체 클래스
 * 생성 후에는 내부 Hex 값을 변경할 수 없으며,
 * 값을 변경하려면 `with` 메서드를 통해 새로운 객체를 생성해야 합니다
 */
class HexColor extends Color {
    /**
     * 새로운 HexColor 객체를 생성합니다
     * @param {string|string[]} hex - 16진수 색상 값 ("000000"-"FFFFFF"), 배열 [hex, a]] 형태도 가능
     * @param {number} [a] - 투명도(Alpha) 값 (0-1). 배열 형태일 경우 생략
     */
    constructor(hex = "#000000", a = 1) {
        super();
        
        // 인자가 배열 형태로 전달된 경우
        if( Array.isArray(hex) && hex.length === 2 ) {
            [hex, a] = hex;
        }

        // 각 값을 정규화하고, 유효하지 않은 값인 경우 디폴트 값 지정
        this.hex = this._normalizeHexValue(hex);

        // hex가 투명도가 포함된 값인 경우 hex에서 투명도 값 추출
        // 아닌 경우 a에서 투명도 값 추출
        if( typeof hex === "string" && hex.startsWith("#") ) {
            hex = hex.substr(1);
        }
        if( hex.length === 4 || hex.length === 8 ) {
            this.a = this._normalizeAlpha(hex);
        } else {
            this.a = this._normalizeAlpha(a);
        }

        // 생성된 객체를 불변으로 지정
        Object.freeze(this);
    }

    /**
     * 다른 HexColor 객체와 현재 객체의 값이 동일한지 비교합니다
     * @param {HexColor} 비교할 HexColor 객체
     * @returns {boolean} 값이 동일하면 true, 그렇지 않으면 false, 인자가 HexColor 객체가 아니면 false
     */
    equals(hexColor) {
        if( !(hexColor instanceof HexColor) ) {
            return false;
        }

        return this.hex === hexColor.hex && this.a === hexColor.a;
    }

    /**
     * 현재 HexColor 객체의 값을 CSS 문자열 형식으로 반환합니다
     * ex) "#FDFDFD88"
     * @returns {string} CSS Hex 문자열
     */
    toCssString() {
        if( this.a === 1 ) {
            return `#${this.hex}`;
        } else {
            return `#${this.hex}${Math.round(this.a * 255).toString(16).padStart(2, "0").toUpperCase()}`;
        }
    }

    /**
     * 현재 HexColor 객체에서 특정 속성을 업데이트하여 새로운 HexColor 객체를 반환합니다
     * 원본 객체는 변경되지 않습니다 (불변성 유지)
     * @param {object} 변경할 속성 (hex, a)을 포함하는 객체. ex) { hex: "#888888", a: 0.5 }
     * @returns {HexColor} 새로운 HexColor 객체
     */
    with({hex = this.hex, a = this.a} = {}) {
        return new HexColor(hex, a);
    }

    /**
     * 현재 HexColor 값에 해당하는 신규 RGBColor 객체를 반환합니다
     * @returns {RGBColor} 현재 HexColor 값에 해당하는 신규 RGBColor 객체
     */
    toRgb() {
        let bigint = parseInt(this.hex, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        
        return new RGBColor(r, g, b);
    }

    /**
     * 현재 HexColor 값에 해당하는 신규 HSLColor 객체를 반환합니다
     * @returns {HSLColor} 현재 HexColor 값에 해당하는 신규 HSLColor 객체
     */
    toHsl() {
        return this.toRgb().toHsl();
    }

    /**
     * 현재 HexColor 값에 해당하는 신규 HSVColor 객체를 반환합니다
     * @returns {HSVColor} 현재 HexColor 값에 해당하는 신규 HSVColor 객체
     */
    toHsv() {
        return this.toRgb().toHsv();
    }

    /**
     * 현재 HexColor 값에 해당하는 신규 HtmlColorName 객체를 반환합니다
     * @returns {HtmlColorName} 현재 HexColor 값에 해당하는 신규 HtmlColorName 객체
     */
    toHtmlColorName() {
        return new HtmlColorName(this);
    }

    /**
     * 16진수 색상(hex) 값을 정규화합니다
     * "#"이 붙은 문자열도 처리하며, 16진수로 이루어진 값이 아니면 기본값 "000000"을 반환합니다
     * @param {string} hex - 정규화할 16진수 색상 값 (0~9 또는 a~f 또는 A~F로 이루어진 문자열)
     * @returns {string} 정규화된 16진수 색상 값(숫자)
     * @private
     */
    _normalizeHexValue(hex) {
        if( typeof hex === "string" && hex.startsWith("#") ) {
            hex = hex.substr(1);
        }

        hex = String(hex);

        if( hex.length !== 3 && hex.length !== 6 ) {
            return "000000";
        } else if( !(/^[0-9A-Fa-f]*$/.test(hex)) ) {
            return "000000";
        }
        return hex.repeat(6 / hex.length).toUpperCase();
    }

    /**
     * 투명도(Alpha) 값을 0-1 범위로 정규화합니다
     * 숫자가 아니거나 NaN이면 기본값 1을 반환합니다
     * @param {number|string} a - 정규화할 투명도 값 또는 16진수 색상 값 (0~9 또는 a~f 또는 A~F로 이루어진 문자열)
     * @returns {number} 정규화된 투명도 값(숫자)
     * @private
     */
    _normalizeAlpha(a) {
        if( typeof a === "string" ) {
            if( a.startsWith("#") ) {
                a = a.substr(1);
            }

            if( a.length === 4 ) {
                return parseInt(a.substr(3).repeat(2), 16) / 255;
            } else if( a.length === 8 ) {
                return parseInt(a.substr(6), 16) / 255;
            }
        } else if( !isNaN(a) && typeof a === "number" ) {
            return Math.max(0, Math.min(1, a));
        }

        return 1;
    }
}

/**
 * HSL 색상을 다루는 불변(Immutable) 데이터 객체 클래스
 * 생성 후에는 내부 HSL 값을 변경할 수 없으며,
 * 값을 변경하려면 `with` 메서드를 통해 새로운 객체를 생성해야 합니다
 */
class HSLColor extends Color {
    /**
     * 새로운 HSLColor 객체를 생성합니다
     * @param {number|string|(number|string)[]} h - 색조(Hue) 값 (0-360), 배열 [h, s, l] 형태 또는 [h, s, l, a]도 가능
     * @param {number|string} [s] - 채도(Saturation) 값 (0-100 또는 "50%"). 배열 형태일 경우 생략
     * @param {number|string} [l] - 명도(Lightness) 값 (0-100 또는 "50%"). 배열 형태일 경우 생략
     * @param {number|string} [a] - 투명도(Alpha) 값 (0-1). 배열 형태일 경우 생략
     */
    constructor(h = 0, s = 0, l = 0, a = 1) {
        super();
        
        // 인자가 배열 형태로 전달된 경우
        if( Array.isArray(h) ) {
            if( h.length === 3 ) {
                [h, s, l] = h;
            } else if( h.length === 4 ) {
                [h, s, l, a] = h;
            }
        }

        // 각 값을 정규화하고, 유효하지 않은 값인 경우 디폴트 값 지정
        this.h = this._normalizeHue(h);
        this.s = this._normalizeSaturation(s);
        this.l = this._normalizeLightness(l);
        this.a = this._normalizeAlpha(a);

        // 생성된 객체를 불변으로 지정
        Object.freeze(this);
    }

    /**
     * 다른 HSLColor 객체와 현재 객체의 값이 동일한지 비교합니다
     * @param {HSLColor} 비교할 HSLColor 객체
     * @returns {boolean} 값이 동일하면 true, 그렇지 않으면 false, 인자가 HSLColor 객체가 아니면 false
     */
    equals(hslColor) {
        if( !(hslColor instanceof HSLColor) ) {
            return false;
        }

        return this.h === hslColor.h && this.s === hslColor.s && this.l === hslColor.l && this.a === hslColor.a;
    }

    /**
     * 현재 HSLColor 객체의 값을 CSS 문자열 형식으로 반환합니다
     * ex) "hsl(120, 50%, 75%, 1)"
     * @returns {string} CSS HSL 문자열
     */
    toCssString() {
        if( this.a === 1 ) {
            return `hsl(${Math.round(this.h)}, ${Math.round(this.s * 100)}%, ${Math.round(this.l * 100)}%)`;
        } else {
            return `hsl(${Math.round(this.h)}, ${Math.round(this.s * 100)}%, ${Math.round(this.l * 100)}%, ${this.a})`;
        }
    }

    /**
     * 현재 HSLColor 객체에서 특정 속성을 업데이트하여 새로운 HSLColor 객체를 반환합니다
     * 원본 객체는 변경되지 않습니다 (불변성 유지)
     * @param {object} 변경할 속성 (h, s, l, a)을 포함하는 객체. ex) { h: 180, l: 70 }
     * @returns {HSLColor} 새로운 HSLColor 객체
     */
    with({h = this.h, s = this.s, l = this.l, a = this.a} = {}) {
        return new HSLColor(h, s, l, a);
    }

    /**
     * 현재 HSLColor 값에 해당하는 신규 RGBColor 객체를 반환합니다
     * @returns {RGBColor} 현재 HSLColor 값에 해당하는 신규 RGBColor 객체
     */
    toRgb() {
        let [h, s, l] = [this.h, this.s, this.l];
        
        let hueSection = Math.floor(h / 60);
        let c = (1 - Math.abs(2 * l - 1)) * s;
        let x = c * (1 - Math.abs(h / 60 % 2 - 1));
        let values = hueSection % 2? [x, c] : [c, x];
        let startIndex = Math.floor(hueSection / 2);

        let rgb = [0, 0, 0];
        rgb[startIndex] = values[0];
        rgb[(++startIndex % 3)] = values[1];
        
        return new RGBColor(...rgb.map(v => Math.round((v + l - c / 2) * 255)), this.a);
    }

    /**
     * 현재 HSLColor 값에 해당하는 신규 HexColor 객체를 반환합니다
     * @returns {HexColor} 현재 HSLColor 값에 해당하는 신규 HexColor 객체
     */
    toHex() {
        return this.toRgb().toHex();
    }

    /**
     * 현재 HSLColor 값에 해당하는 신규 HSVColor 객체를 반환합니다
     * @returns {HSVColor} 현재 HSLColor 값에 해당하는 신규 HSVColor 객체
     */
    toHsv() {
        return this.toRgb().toHsv();
    }

    /**
     * 현재 HSLColor 값에 해당하는 HtmlColorName 객체를 반환합니다.
     * 해당하는 값이 없는 경우 HtmlColorName 객체의 name 속성 값은 null이 됩니다.
     * @returns {HtmlColorName} 새로운 HSLColor 객체
     */
    toHtmlColorName() {
        return new HtmlColorName(this);
    }

    /**
     * 색조(Hue) 값을 0-360 범위로 정규화합니다
     * 숫자가 아니거나 NaN이면 기본값 0을 반환합니다
     * @param {number} h - 정규화할 색조 값
     * @returns {number} 정규화된 색조 값
     * @private
     */
    _normalizeHue(h) {
        h = Number(h);
        
        if( !isNaN(h) && typeof h === "number" ) {
            return Math.max(0, Math.min(360, (h % 360 + 360) % 360));
        } else {
            return 0;
        }
    }

    /**
     * 채도(Saturation) 값을 0-1 범위로 정규화합니다
     * "%"가 붙은 문자열도 처리하며, 숫자가 아니거나 NaN이면 기본값 0을 반환합니다
     * @param {number|string} s - 정규화할 채도 값 (숫자 또는 "50%" 형태의 문자열)
     * @returns {number} 정규화된 채도 값(숫자)
     * @private
     */
    _normalizeSaturation(s) {
        if( typeof s === "string" && s.endsWith("%") ) {
            s = Number(s.slice(0, -1));
        }
        s = Number(s);

        if( !isNaN(s) && typeof s === "number" ) {
            return Math.max(0, Math.min(1, s));
        } else {
            return 0;
        }
    }

    /**
     * 명도(Lightness) 값을 0-1 범위로 정규화합니다
     * "%"가 붙은 문자열도 처리하며, 숫자가 아니거나 NaN이면 기본값 0을 반환합니다
     * @param {number|string} l - 정규화할 명도 값 (숫자 또는 "50%" 형태의 문자열)
     * @returns {number} 정규화된 명도 값(숫자)
     * @private
     */
    _normalizeLightness(l) {
        if( typeof l === "string" && l.endsWith("%") ) {
            l = Number(l.slice(0, -1));
        }
        l = Number(l);

        if( !isNaN(l) && typeof l === "number" ) {
            return Math.max(0, Math.min(1, l));
        } else {
            return 0;
        }
    }

    /**
     * 투명도(Alpha) 값을 0-1 범위로 정규화합니다
     * 숫자가 아니거나 NaN이면 기본값 1을 반환합니다
     * @param {number|string} a - 정규화할 투명도 값
     * @returns {number} 정규화된 투명도 값(숫자)
     * @private
     */
    _normalizeAlpha(a) {
        a = Number(a);

        if( !isNaN(a) && typeof a === "number" ) {
            return Math.max(0, Math.min(1, a));
        } else {
            return 1;
        }
    }
}

/**
 * HSV 색상을 다루는 불변(Immutable) 데이터 객체 클래스
 * 생성 후에는 내부 HSV 값을 변경할 수 없으며,
 * 값을 변경하려면 `with` 메서드를 통해 새로운 객체를 생성해야 합니다
 */
class HSVColor extends Color {
    /**
     * 새로운 HSVColor 객체를 생성합니다
     * @param {number|string|(number|string)[]} h - 색조(Hue) 값 (0-360), 배열 [h, s, v] 형태 또는 [h, s, v, a]도 가능
     * @param {number|string} [s] - 채도(Saturation) 값 (0-100 또는 "50%"). 배열 형태일 경우 생략
     * @param {number|string} [v] - 명도(Value) 값 (0-100 또는 "50%"). 배열 형태일 경우 생략
     * @param {number|string} [a] - 투명도(Alpha) 값 (0-1). 배열 형태일 경우 생략
     */
    constructor(h = 0, s = 0, v = 0, a = 1) {
        super();
        
        // 인자가 배열 형태로 전달된 경우
        if( Array.isArray(h) ) {
            if( h.length === 3 ) {
                [h, s, v] = h;
            } else if( h.length === 4 ) {
                [h, s, v, a] = h;
            }
        }

        // 각 값을 정규화하고, 유효하지 않은 값인 경우 디폴트 값 지정
        this.h = this._normalizeHue(h);
        this.s = this._normalizeSaturation(s);
        this.v = this._normalizeValue(v);
        this.a = this._normalizeAlpha(a);

        // 생성된 객체를 불변으로 지정
        Object.freeze(this);
    }

    /**
     * 다른 HSVColor 객체와 현재 객체의 값이 동일한지 비교합니다
     * @param {HSVColor} 비교할 HSVColor 객체
     * @returns {boolean} 값이 동일하면 true, 그렇지 않으면 false, 인자가 HSVColor 객체가 아니면 false
     */
    equals(hsvColor) {
        if( !(hsvColor instanceof HSVColor) ) {
            return false;
        }

        return this.h === hsvColor.h && this.s === hsvColor.s && this.v === hsvColor.v && this.a === hsvColor.a;
    }

    /**
     * 현재 HSVColor 객체에서 특정 속성을 업데이트하여 새로운 HSVColor 객체를 반환합니다
     * 원본 객체는 변경되지 않습니다 (불변성 유지)
     * @param {object} 변경할 속성 (h, s, v, a)을 포함하는 객체. ex) { h: 180, v: 70 }
     * @returns {HSVColor} 새로운 HSVColor 객체
     */
    with({h = this.h, s = this.s, v = this.v} = {}) {
        return new HSVColor(h, s, v);
    }

    /**
     * 현재 HSVColor 값에 해당하는 신규 RGBColor 객체를 반환합니다
     * @returns {RGBColor} 현재 HSVColor 값에 해당하는 신규 RGBColor 객체
     */
    toRgb() {
        let [h, s, v] = [this.h, this.s, this.v];
        let c = v * s;
        let x = c * (1 - Math.abs((h / 60) % 2 - 1));
        let m = v - c;
        let r = 0, g = 0, b = 0;
        
        if( h < 60 ) {
            [r, g, b] = [c, x, 0];
        } else if( h < 120 ) {
            [r, g, b] = [x, c, 0];
        } else if( h < 180 ) {
            [r, g, b] = [0, c, x];
        } else if( h < 240 ) {
            [r, g, b] = [0, x, c];
        } else if( h < 300 ) {
            [r, g, b] = [x, 0, c];
        } else {
            [r, g, b] = [c, 0, x];
        }
        
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);
        
        return new RGBColor(r, g, b);
    }

    /**
     * 현재 HSVColor 값에 해당하는 신규 HSLColor 객체를 반환합니다
     * @returns {HSLColor} 현재 HSVColor 값에 해당하는 신규 HSLColor 객체
     */
    toHsl() {
        return this.toRgb().toHsl();
    }

    /**
     * 현재 HSVColor 값에 해당하는 신규 HexColor 객체를 반환합니다
     * @returns {HexColor} 현재 HSVColor 값에 해당하는 신규 HexColor 객체
     */
    toHex() {
        return this.toRgb().toHex();
    }

    /**
     * 현재 HSVColor 값에 해당하는 신규 HtmlColorName 객체를 반환합니다
     * @returns {HtmlColorName} 현재 HSVColor 값에 해당하는 신규 HtmlColorName 객체
     */
    toHtmlColorName() {
        return new HtmlColorName(this);
    }

    /**
     * 색조(Hue) 값을 0-360 범위로 정규화합니다
     * 숫자가 아니거나 NaN이면 기본값 0을 반환합니다
     * @param {number} h - 정규화할 색조 값
     * @returns {number} 정규화된 색조 값
     * @private
     */
    _normalizeHue(h) {
        if( !isNaN(h) && typeof h === "number" ) {
            return Math.max(0, Math.min(360, (h % 360 + 360) % 360));
        } else {
            return 0;
        }
    }

    /**
     * 채도(Saturation) 값을 0-1 범위로 정규화합니다
     * "%"가 붙은 문자열도 처리하며, 숫자가 아니거나 NaN이면 기본값 0을 반환합니다
     * @param {number|string} s - 정규화할 채도 값 (숫자 또는 "50%" 형태의 문자열)
     * @returns {number} 정규화된 채도 값(숫자)
     * @private
     */
    _normalizeSaturation(s) {
        if( typeof s === "string" && s.endsWith("%") ) {
            s = Number(s.slice(0, -1));
        }

        if( !isNaN(s) && typeof s === "number" ) {
            return Math.max(0, Math.min(1, s));
        } else {
            return 0;
        }
    }

    /**
     * 명도(Value) 값을 0-1 범위로 정규화합니다
     * "%"가 붙은 문자열도 처리하며, 숫자가 아니거나 NaN이면 기본값 0을 반환합니다
     * @param {number|string} l - 정규화할 명도 값 (숫자 또는 "50%" 형태의 문자열)
     * @returns {number} 정규화된 명도 값(숫자)
     * @private
     */
    _normalizeValue(v) {
        if( typeof v === "string" && v.endsWith("%") ) {
            v = Number(v.slice(0, -1));
        }

        if( !isNaN(v) && typeof v === "number" ) {
            return Math.max(0, Math.min(1, v));
        } else {
            return 0;
        }
    }

    /**
     * 투명도(Alpha) 값을 0-1 범위로 정규화합니다
     * 숫자가 아니거나 NaN이면 기본값 1을 반환합니다
     * @param {number|string} a - 정규화할 투명도 값
     * @returns {number} 정규화된 투명도 값(숫자)
     * @private
     */
    _normalizeAlpha(a) {
        if( !isNaN(a) && typeof a === "number" ) {
            return Math.max(0, Math.min(1, a));
        } else {
            return 1;
        }
    }
}

/**
 * HTML 색상명을 다루는 불변(Immutable) 데이터 객체 클래스
 * 생성 후에는 내부 색상명 값을 변경할 수 없으며,
 * 값을 변경하려면 `with` 메서드를 통해 새로운 객체를 생성해야 합니다
 */
class HtmlColorName extends Color {
    /**
     * 새로운 HtmlColorName 객체를 생성합니다
     * @param {string|RGBColor|HexColor|HSLColor|HSVColor} [color] - 색상 값 ("red" 또는 색상 객체)
     */
    constructor(color) {
        super();

        // 색상 객체인 경우 HexColor 객체로 변경
        if( color instanceof HSLColor || color instanceof RGBColor || color instanceof HSVColor ) {
            color = color.toHex();
        }

        // 색상 값을 정규화하고, 유효하지 않은 값인 경우 디폴트 값 지정
        this.name = this._normalizeValue(color);

        // 생성된 객체를 불변으로 지정
        Object.freeze(this);
    }

    /**
     * 다른 HtmlColorName 객체와 현재 객체의 값이 동일한지 비교합니다
     * @param {HtmlColorName} 비교할 HtmlColorName 객체
     * @returns {boolean} 값이 동일하면 true, 그렇지 않으면 false, 인자가 HtmlColorName 객체가 아니면 false
     */
    equals(htmlColorName) {
        if( !(htmlColorName instanceof HtmlColorName) ) {
            return false;
        }

        return this.name === HtmlColorName.name;
    }

    /**
     * 현재 HtmlColorName 객체의 값을 CSS 문자열 형식으로 반환합니다
     * ex) "red"
     * @returns {string} HTML 색상명
     */
    toCssString() {
        return `${this.name}`;
    }

    /**
     * 현재 HtmlColorName 값에 해당하는 신규 RGBColor 객체를 반환합니다
     * @returns {RGBColor} 현재 HtmlColorName 값에 해당하는 신규 RGBColor 객체
     */
    toRgb() {
        let hex = this.toHex();
        if( hex !== null ) {
            return hex.toRgb();
        }

        return null;
    }

    /**
     * 현재 HtmlColorName 값에 해당하는 신규 HSLColor 객체를 반환합니다
     * @returns {HSLColor} 현재 HtmlColorName 값에 해당하는 신규 HSLColor 객체
     */
    toHsl() {
        let hex = this.toHex();
        if( hex !== null ) {
            return hex.toHsl();
        }

        return null;
    }

    /**
     * 현재 HtmlColorName 값에 해당하는 신규 HSVColor 객체를 반환합니다
     * @returns {HSVColor} 현재 HtmlColorName 값에 해당하는 신규 HSVColor 객체
     */
    toHsv() {
        let hex = this.toHex();
        if( hex !== null ) {
            return hex.toHsv();
        }

        return null;
    }

    /**
     * 현재 HtmlColorName 값에 해당하는 신규 HexColor 객체를 반환합니다
     * @returns {HexColor} 현재 HtmlColorName 값에 해당하는 신규 HexColor 객체
     */
    toHex() {
        return HTML_COLOR_NAMES[this.name]? new HexColor(HTML_COLOR_NAMES[this.name]) : null;
    }

    /**
     * HexColor 객체를 HTML 색상명으로 정규화합니다
     * HTML 색상명인 경우 그대로 반환합니다
     * HTML_COLOR_NAMES 존재하지 않는 색상인 경우 기본값 null을 반환합니다
     * @param {string|HexColor} color - HTML 색상명 또는 HexColor 객체
     * @returns {string|null} 정규화된 HTML 색상명. HTML 색상명이 존재하지 않는 값인 경우 null 반환
     * @private
     */
    _normalizeValue(color) {
        if( typeof color ===  "string" && HTML_COLOR_NAMES[color] ) {
            return color;
        } else if( color instanceof HexColor ) {
            let keys = Object.keys(HTML_COLOR_NAMES);
            for( let key of keys ) {
                if( HTML_COLOR_NAMES[key] === "#" + color.hex ) {
                    return key;
                }
            }
        }

        return null;
    }
}

/**
 * 두 색상 간의 거리를 HSL 색상 공간에서 계산합니다
 * Hue(색조), Saturation(채도), Lightness(명도)에 가중치를 적용할 수 있으며,
 * 색상 거리가 낮을수록 두 색상이 더 유사함을 의미합니다
 *
 * @param {Color} srcColor Color 클래스의 자식 클래스의 객체
 * @param {Color} dstColor Color 클래스의 자식 클래스의 객체
 * @param {number} [options.weightH=1] 색조(Hue) 차이에 적용할 가중치. 기본값은 1
 * @param {number} [options.weightS=300] 채도(Saturation) 차이에 적용할 가중치. 기본값은 300
 * @param {number} [options.weightL=300] 명도(Lightness) 차이에 적용할 가중치. 기본값은 300
 * @returns {number|null} 두 색상 간의 계산된 거리 값. 입력 색상 객체가 유효하지 않으면 null 반환
 */
function calcDistanceColor(srcColor, dstColor, {weightH = 1, weightS = 300, weightL = 300} = {}) {
    if( !(srcColor instanceof Color && dstColor instanceof Color) ) {
        return null;
    }

    if( !(srcColor instanceof HSLColor) ) {
        srcColor = srcColor.toHsl();
    }
    if( !(dstColor instanceof HSLColor) ) {
        dstColor = dstColor.toHsl();
    }

    let dh = Math.abs(srcColor.h - dstColor.h);
    if( dh > 180 ) {
        dh = 360 - dh;
    }
    let ds = srcColor.s - dstColor.s;
    let dl = srcColor.l - dstColor.l;

    return Math.sqrt(Math.pow(dh, 2) * weightH + Math.pow(ds, 2) * weightS + Math.pow(dl, 2) * weightL);
}

/**
 * WCAG (Web Content Accessibility Guidelines) 에서 권장하는 최소 대비율을 정의합니다
 * normalText: 일반 텍스트 (18pt 미만 또는 bold 14pt 미만)
 * largeText: 큰 텍스트 (18pt 이상 또는 bold 14pt 이상)
 * 
 * 이 상수는 Object.freeze()를 통해 불변성을 보장합니다
 */
const WCAG_MINIMUM_RATIOS = {
    /**
     * 레벨 AA (Minimum Contrast - 최소 대비) 요구사항
     * normalText: 최소 대비율 (4.5:1)
     * largeText: 최소 대비율 (3:1)
     */
    AA: {
        normalText: 4.5,
        largeText: 3.0
    },
    /**
     * 레벨 AAA (Enhanced Contrast - 향상된 대비) 요구사항
     * normalText: 최소 대비율 (7:1)
     * largeText: 최소 대비율 (4.5:1)
     */
    AAA: {
        normalText: 7.0,
        largeText: 4.5
    }
};
Object.freeze(WCAG_MINIMUM_RATIOS);

/**
 * 두 색상 간의 WCAG (Web Content Accessibility Guidelines) 대비율을 계산하고,
 * 텍스트 크기와 볼드 여부에 따라 WCAG 레벨(AA 또는 AAA)을 계산합니다
 *
 * @param {Color} srcColor Color 클래스의 자식 클래스의 객체
 * @param {Color} dstColor Color 클래스의 자식 클래스의 객체
 * @param {number} [options.size=16] - 텍스트의 폰트 크기 (pt 단위). 큰 텍스트 여부 판단에 사용
 * @param {boolean} [options.isBold=false] - 텍스트가 볼드체인지 여부. 큰 텍스트 여부 판단에 사용
 * @returns {{level: string|null, contrast: number}|null} 계산된 WCAG 레벨("AA", "AAA")과 대비율 값을 포함하는 객체. 입력 색상 객체가 유효하지 않으면 null 반환
 */
function calcWCAGContrast(srcColor, dstColor, {size = 16, isBold = false} = {}) {
    if( !(srcColor instanceof Color && dstColor instanceof Color) ) {
        return null;
    }

    if( !(srcColor instanceof RGBColor) ) {
        srcColor = srcColor.toRgb();
    }
    if( !(dstColor instanceof RGBColor) ) {
        dstColor = dstColor.toRgb();
    }

    function _toLinearValue(value) {
        value /= 255;
        return value <= 0.03928? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
    }

    let weights = [0.2126, 0.7152, 0.0722];
    let l1 = [srcColor.r, srcColor.g, srcColor.b].map((v, i) => _toLinearValue(v) * weights[i]).reduce((a, b) => a + b, 0);
    let l2 = [dstColor.r, dstColor.g, dstColor.b].map((v, i) => _toLinearValue(v) * weights[i]).reduce((a, b) => a + b, 0);

    let level = null;
    let contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    contrast = Math.round(contrast * 10) / 10;
    
    let isLargeText = size >= 18 || (size >= 14 && isBold);
    let keys = Object.keys(WCAG_MINIMUM_RATIOS);
    for( let i = 0; i < keys.length; i++ ) {
        if( WCAG_MINIMUM_RATIOS[keys[i]][isLargeText? "largeText" : "normalText"] <= contrast ) {
            level = keys[i];
        }
    }
    
    return {level, contrast};
}

/**
 * 디폴트 색상 스케일 정보를 정의합니다
 * 해당 색상 스케일은 950(0.12%)에서 50(0.98%)까지 총 11개의 단계로 구성됩니다
 * 
 * 이 상수는 Object.freeze()를 통해 불변성을 보장합니다
 */
const COLOR_SCALE_INFO = {
    "0.12": "950",
    "0.15": "900",
    "0.25": "800",
    "0.35": "700",
    "0.45": "600",
    "0.55": "500",
    "0.65": "400",
    "0.75": "300",
    "0.85": "200",
    "0.95": "100",
    "0.98": "50"
};
Object.freeze(COLOR_SCALE_INFO);

/**
 * 스케일 정보와 기준 색상을 통해 색상 스케일 목록을 생성합니다
 * index를 입력한다면 기준 색상의 스케일 범위를 index 위치로 고정하고,
 * 다른 범위는 상대적인 명도값으로 계산합니다.
 *
 * @param {Object} colorScaleInfo 색상 스케일 정보 객체. ("명도값": "스케일명")으로 구성된 객체
 * @param {Color} color Color 클래스의 자식 클래스의 객체
 * @param {number} index color의 스케일 위치
 * @returns {{scale: string, color: HSLColor}|null} 생성된 색상 스케일 객체 목록
 */
function createColorScaleList(colorScaleInfo, color, index) {
    if( !(color instanceof Color) ) {
        return null;
    }

    let hslColor = color;
    if( !(color instanceof HSLColor) ) {
        hslColor = color.toHsl();
    }
    
    let keys = Object.keys(colorScaleInfo);
    let colorScaleList = [];
    let [h, s, l] = [hslColor.h, hslColor.s, hslColor.l];

    if( isNaN(index) ) {
        for( let i = 0; i < keys.length; i++ ) {
            colorScaleList.push({scale: colorScaleInfo[keys[i]], color: new HSLColor(h, s, keys[i])});
        }
    } else {
        index = Math.min(keys.length - 1, index);
        for( let i = 0; i < keys.length; i++ ) {
            let gap = keys[index] - keys[i];
            colorScaleList.push({scale: colorScaleInfo[keys[i]], color: new HSLColor(h, s, l - gap)});
        }
    }
    
    return colorScaleList;
}
