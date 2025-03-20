// ==UserScript==
// @name         Bypass Yeumoney V2m
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Bypass Yeumoney
// @author       duongthekhoa
// @match        https://yeumoney.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_notification
// @run-at       document-end
// ==/UserScript==

(function () {
  "use strict";

  // URL để lấy key hợp lệ từ Pastebin
  const KEY_SERVER_URL = "https://pastebin.com/raw/JUnQd9q9";

  // Hàm lấy key từ server
  function fetchValidKey() {
    return new Promise((resolve, reject) => {
      const timestamp = Date.now();
      const urlWithTimestamp = `${KEY_SERVER_URL}?t=${timestamp}`;
      console.log("Đang lấy key từ server:", urlWithTimestamp);
      GM_xmlhttpRequest({
        method: "GET",
        url: urlWithTimestamp,
        headers: {
          "Cache-Control": "no-cache",
        },
        onload: function (response) {
          console.log("Phản hồi từ server:", response.responseText);
          try {
            const data = JSON.parse(response.responseText);
            if (data && data.key) {
              console.log("Key hợp lệ từ server:", data.key.trim());
              resolve(data.key.trim());
            } else {
              console.error("Không tìm thấy key trong dữ liệu JSON");
              reject("Không tìm thấy key trong dữ liệu JSON");
            }
          } catch (e) {
            console.error("Lỗi phân tích JSON:", e.message);
            reject("Lỗi phân tích JSON: " + e.message);
          }
        },
        onerror: function () {
          console.error("Không thể kết nối đến server key");
          reject("Không thể kết nối đến server key");
        },
      });
    });
  }

  // Kiểm tra key
  async function checkKey(userKey) {
    console.log("Key đang kiểm tra:", `"${userKey}"`);
    try {
      const validKey = await fetchValidKey();
      console.log(
        "So sánh key với key từ server:",
        `"${userKey}" vs "${validKey}"`
      );
      if (userKey !== validKey) {
        console.log("Key không khớp, xóa key cũ...");
        GM_setValue("userKey", "");
      }
      return userKey === validKey;
    } catch (error) {
      console.error("Lỗi trong checkKey:", error);
      return false;
    }
  }

  // Hàm cập nhật key mới
  async function updateKey(newKey) {
    try {
      const validKey = await fetchValidKey();
      console.log("Kiểm tra key mới nhập:", `"${newKey}" vs "${validKey}"`);
      if (newKey !== validKey) {
        console.log("Key mới không hợp lệ");
        return false;
      }
      GM_setValue("userKey", newKey);
      console.log("Key mới đã được lưu:", newKey);
      return true;
    } catch (error) {
      console.error("Lỗi khi cập nhật key:", error);
      return false;
    }
  }

  // Chạy script chính
  (async () => {
    console.log("=== Bắt đầu chạy script (mỗi khi trang tải/reload) ===");

    const _0x1b8b03 = "https://traffic-user.net/GET_VUATRAFFIC.php",
      _0x5409d4 = "https://traffic-user.net/GET_MA.php",
      _0x342b9f = "https://www.google.com/",
      _0x34c038 =
        "https://api.ocr.space/parse/imageurl?apikey=K81664733488957&isOverlayRequired=true&OCREngine=2";

    function _0x6749c7() {
      console.log("Đang đổi nhiệm vụ...");
      const _0x32edc7 = document.querySelector("#btn-baoloi");
      if (!_0x32edc7) {
        console.log("Không tìm thấy nút báo lỗi");
        return;
      }
      _0x32edc7.click();
      setTimeout(() => {
        const _0x25ce2e = document.querySelector(
          "#lydo_doima > center > a:nth-child(2)"
        );
        if (_0x25ce2e) {
          _0x25ce2e.click();
        }
        setTimeout(() => {
          const _0x11cfea = document.querySelector(
            "#lydo_doima > label:nth-child(8) > input[type=radio]"
          );
          if (_0x11cfea) {
            _0x11cfea.click();
          }
          setTimeout(() => {
            const _0x422e98 = document.querySelector("#dongy_doima > a");
            if (_0x422e98) {
              _0x422e98.click();
            }
          }, 500);
        }, 500);
      }, 500);
    }

    function _0x2873d5() {
      return new Promise((_0x488e8e, _0x58d518) => {
        console.log("Bắt đầu nhận diện URL...");
        const _0x28ebb4 =
            document.querySelector("p#TK1")?.textContent.trim().toLowerCase() ||
            "",
          _0x1ae1f2 =
            document.querySelector("img#halt_nv") ||
            document.querySelector("img#hinh_nv"),
          _0x58b37d = _0x1ae1f2 ? _0x1ae1f2.src : null;
        if (!_0x58b37d || _0x58b37d.includes("placehold.co")) {
          console.log("Hình ảnh chưa sẵn sàng, thử lại...");
          setTimeout(() => {
            _0x2873d5().then(_0x488e8e).catch(_0x58d518);
          }, 100);
          return;
        }
        const _0x28e99a = _0x34c038 + "&url=" + _0x58b37d,
          _0x45b2f2 = new XMLHttpRequest();
        _0x45b2f2.open("GET", _0x28e99a, true);
        _0x45b2f2.onload = function () {
          if (_0x45b2f2.status === 200) {
            const _0x537d3f = JSON.parse(_0x45b2f2.responseText),
              _0x45e678 = _0x537d3f.ParsedResults[0],
              _0x563b68 = _0x45e678.TextOverlay.Lines.filter(
                (_0x1a1624) =>
                  _0x1a1624.LineText.match(
                    /\b[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\b/
                  ) &&
                  _0x1a1624.Words &&
                  _0x1a1624.Words.some((_0x3ab640) => _0x3ab640.Top < 170)
              ).map((_0x2926af) => _0x2926af.LineText);
            let _0x4cee3e = "";
            if (_0x28ebb4 === "188bet") {
              _0x4cee3e = "https://165.22.63.250/" + _0x563b68 + "/";
            } else if (_0x28ebb4 === "w88") {
              _0x4cee3e = "https://188.166.185.213/";
            } else if (_0x28ebb4 === "bk8") {
              _0x4cee3e = "https://188.166.189.40/" + _0x563b68 + "/";
            } else if (_0x28ebb4 === "fb88") {
              _0x4cee3e = "https://fb88xn.com/" + _0x563b68 + "/";
            } else if (_0x28ebb4 === "m88") {
              _0x4cee3e = "https://bet88" + _0x563b68 + "/";
            } else if (_0x28ebb4 === "vn88") {
              _0x4cee3e = "https://vn88ce.com/" + _0x563b68 + "/";
            } else if (_0x28ebb4 === "v9bet") {
              _0x4cee3e = "https://188.166.224.89/" + _0x563b68 + "/";
            } else {
              _0x4cee3e = "Chưa nhận diện được URL!";
            }
            console.log("URL nhận diện:", _0x4cee3e);
            _0x488e8e(_0x4cee3e);
          } else {
            _0x58d518("Lỗi khi tải dữ liệu: " + _0x45b2f2.status);
          }
        };
        _0x45b2f2.send();
      });
    }

    function _0x2ede3d(_0x32efad) {
      const _0x591353 = Date.now();
      return (
        _0x591353 + "," + _0x342b9f + "," + _0x32efad + ",IOS900,hidden,null"
      );
    }

    function _0x2fa783(_0x4de4fd) {
      return new Promise((_0x36ec55, _0x330492) => {
        const _0x2e3813 = _0x2ede3d(),
          _0x8c347a = new XMLHttpRequest(),
          _0xea5dce = _0x1b8b03 + "?data=" + _0x2e3813 + "&clk=" + _0x4de4fd;
        _0x8c347a.open("POST", _0xea5dce, true);
        _0x8c347a.onload = function () {
          if (_0x8c347a.status === 200) {
            const _0x171aed = _0x8c347a.responseText,
              _0x47bdb0 = _0x171aed.match(
                /localStorage\.codexn\s*=\s*'([^']+)'/
              )?.[1];
            _0x47bdb0
              ? ((localStorage.codexn = _0x47bdb0), _0x36ec55(_0x47bdb0))
              : (console.error("Không thể lấy mã codexn"),
                _0x330492("Lỗi! Đổi nhiệm vụ khác và thử lại"));
          } else {
            _0x330492("Lỗi: " + _0x8c347a.status);
          }
        };
        _0x8c347a.onerror = () =>
          _0x330492("Lỗi mạng hoặc yêu cầu không thành công");
        _0x8c347a.send();
      });
    }

    function _0x1b4021(_0x11aaec, _0x1c2238, _0x212897, _0x531f40) {
      return new Promise((_0x39297f, _0x40c7d3) => {
        const _0x561cad =
            _0x5409d4 +
            "?codexn=" +
            _0x11aaec +
            "&url=" +
            _0x1c2238 +
            "&loai_traffic=" +
            _0x212897 +
            "&clk=" +
            _0x531f40,
          _0x341782 = new XMLHttpRequest();
        _0x341782.open("POST", _0x561cad, true);
        _0x341782.onload = function () {
          if (_0x341782.status === 200) {
            const _0xc8940f = _0x341782.responseText,
              _0x265dc1 = _0xc8940f.match(
                /sessionStorage\.setItem\("ymnclk", (\d+)\)/
              )?.[1];
            if (_0x265dc1) {
              sessionStorage.setItem("ymnclk", _0x265dc1);
              _0x39297f(_0x265dc1);
            } else {
              const _0x14bbc1 = new DOMParser().parseFromString(
                  _0xc8940f,
                  "text/html"
                ),
                _0x46f830 = _0x14bbc1.querySelector("span#layma_me_vuatraffic");
              if (_0x46f830) {
                _0x39297f(_0x46f830.textContent.trim());
              } else {
                _0x40c7d3("URL Lỗi! Vui lòng kiểm tra lại.");
              }
            }
          } else {
            _0x40c7d3("Lỗi: " + _0x341782.status);
          }
        };
        _0x341782.onerror = () =>
          _0x40c7d3("Lỗi mạng hoặc yêu cầu không thành công");
        _0x341782.send();
      });
    }

    function _0x313435(_0x26bb60) {
      const _0x2c2fff =
          document.querySelector("#gt-form")?.getAttribute("action") || "",
        _0x16eec3 = "https://yeumoney.com" + _0x2c2fff,
        _0x1c1f9d = new FormData();
      _0x1c1f9d.append("code", _0x26bb60);
      _0x1c1f9d.append("keyword", "");
      _0x1c1f9d.append(
        "dieuhanh",
        document.querySelector('input[name="dieuhanh"]')?.value || ""
      );
      _0x1c1f9d.append(
        "pix",
        document.querySelector('input[name="pix"]')?.value || ""
      );
      _0x1c1f9d.append(
        "lvp",
        document.querySelector('input[name="lvp"]')?.value || ""
      );
      _0x1c1f9d.append("ref", "$ref");
      _0x1c1f9d.append(
        "trinhduyet",
        document.getElementById("trinhduyet")?.value || ""
      );
      _0x1c1f9d.append(
        "id_traffic",
        document.getElementById("id_donhang")?.value || ""
      );
      _0x1c1f9d.append("check_index", "1");
      const _0x58f355 = new URLSearchParams(_0x1c1f9d).toString();
      GM_xmlhttpRequest({
        method: "POST",
        url: _0x16eec3,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": navigator.userAgent,
          Referer: "https://yeumoney.com/",
          Cookie: document.cookie,
        },
        data: _0x58f355,
        onload: function (_0x29c492) {
          window.location.href = _0x29c492.finalUrl;
        },
        onerror: function (_0x409a99) {
          const _0x5c0265 = _0x409a99.error,
            _0x2cc01d = _0x5c0265.match(/https?:\/\/[^\s"]+/);
          window.location.href = _0x2cc01d;
        },
      });
    }

    async function _0x20c4d5(_0x3d2a4e) {
      try {
        const _0x56469f = await _0x2fa783(null),
          _0x4b5d19 = _0x3d2a4e.replace(/\/$/, ""),
          _0x393918 = await _0x1b4021(_0x56469f, _0x4b5d19, _0x342b9f, null),
          _0x511f76 = await _0x2fa783(_0x393918),
          _0x3e99b8 = _0x3d2a4e + "admin",
          _0x3e7910 = await _0x1b4021(
            _0x511f76,
            _0x3e99b8,
            _0x3d2a4e,
            _0x393918
          );
        return _0x3e7910;
      } catch (_0x564c0d) {
        console.error("Lỗi trong startBypass:", _0x564c0d);
        return null;
      }
    }

    function _0x3d4ed8(_0x1af7db) {
      console.log("Hiển thị giao diện tool với URL:", _0x1af7db);
      const _0x49a5dd = document.createElement("div");
      _0x49a5dd.style.position = "fixed";
      _0x49a5dd.style.top = "10px";
      _0x49a5dd.style.right = "10px";
      _0x49a5dd.style.backgroundColor = "#f9f9f9";
      _0x49a5dd.style.border = "1px solid #ccc";
      _0x49a5dd.style.padding = "10px";
      _0x49a5dd.style.zIndex = "9999";
      _0x49a5dd.style.width = "350px";
      _0x49a5dd.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
      _0x49a5dd.style.borderRadius = "10px";

      const _0x28f938 = document.createElement("h4");
      _0x28f938.textContent = "Script By Duongthekhoa";
      _0x28f938.style.margin = "0";
      _0x28f938.style.marginBottom = "10px";
      _0x28f938.style.fontSize = "10px";
      _0x28f938.style.fontStyle = "italic";
      _0x28f938.style.textAlign = "center";
      _0x28f938.style.backgroundImage =
        "linear-gradient(90deg, red, orange, brown, green, blue, indigo, violet, indigo, blue, green, brown, orange, red)";
      _0x28f938.style.backgroundSize = "200% auto";
      _0x28f938.style.color = "transparent";
      _0x28f938.style.backgroundClip = "text";
      _0x28f938.style.webkitBackgroundClip = "text";
      _0x28f938.style.animation = "rainbowMove 5s linear infinite";
      const _0x1d9137 = document.createElement("style");
      _0x1d9137.textContent =
        "\n    @keyframes rainbowMove {\n        0% {\n            background-position: 0% 50%;\n        }\n        100% {\n            background-position: 100% 50%;\n        }\n    }\n";
      document.head.appendChild(_0x1d9137);
      _0x49a5dd.appendChild(_0x28f938);

      const _0xkeyLabel = document.createElement("h3");
      _0xkeyLabel.textContent = "Nhập Key:";
      _0xkeyLabel.style.margin = "0";
      _0xkeyLabel.style.fontWeight = "bold";
      _0xkeyLabel.style.marginBottom = "5px";
      _0xkeyLabel.style.fontSize = "16px";
      _0xkeyLabel.style.color = "darkblue";
      _0x49a5dd.appendChild(_0xkeyLabel);

      const _0xkeyInput = document.createElement("input");
      _0xkeyInput.type = "text";
      _0xkeyInput.placeholder = "Nhập key tại đây";
      _0xkeyInput.value = GM_getValue("userKey", "");
      _0xkeyInput.style.width = "100%";
      _0xkeyInput.style.marginBottom = "10px";
      _0xkeyInput.style.padding = "8px";
      _0xkeyInput.style.fontSize = "14px";
      _0x49a5dd.appendChild(_0xkeyInput);

      const _0xkeyStatus = document.createElement("h4");
      _0xkeyStatus.style.margin = "0";
      _0xkeyStatus.style.marginBottom = "10px";
      _0xkeyStatus.style.fontSize = "13px";
      _0xkeyStatus.textContent = "Đang kiểm tra key...";
      _0xkeyStatus.style.color = "gray";
      _0x49a5dd.appendChild(_0xkeyStatus);

      const _0x2cb68f = document.createElement("h3");
      _0x2cb68f.textContent = "Nhập URL nhiệm vụ:";
      _0x2cb68f.style.margin = "0";
      _0x2cb68f.style.fontWeight = "bold";
      _0x2cb68f.style.marginBottom = "10px";
      _0x2cb68f.style.fontSize = "16px";
      _0x2cb68f.style.color = "darkred";
      _0x49a5dd.appendChild(_0x2cb68f);

      const _0x5cf72e = document.createElement("input");
      _0x5cf72e.readOnly = false;
      _0x5cf72e.placeholder = "Nếu để trống sẽ sử dụng URL nhận diện!";
      _0x5cf72e.style.width = "100%";
      _0x5cf72e.style.marginBottom = "10px";
      _0x5cf72e.style.padding = "8px";
      _0x5cf72e.style.fontSize = "14px";
      _0x49a5dd.appendChild(_0x5cf72e);

      const _0x497cbe = document.createElement("h4");
      _0x497cbe.textContent = "URL nhận diện (OCR): " + _0x1af7db;
      _0x497cbe.style.margin = "0";
      _0x497cbe.style.marginBottom = "10px";
      _0x497cbe.style.fontSize = "13px";
      _0x497cbe.style.color = "brown";
      _0x49a5dd.appendChild(_0x497cbe);

      const _0x57e893 = document.createElement("div");
      _0x57e893.style.display = "flex";
      _0x57e893.style.alignItems = "center";
      _0x57e893.style.marginBottom = "10px";
      _0x57e893.style.fontSize = "14px";
      _0x57e893.style.color = "chocolate";
      const _0x50a759 = document.createElement("input");
      _0x50a759.type = "checkbox";
      _0x50a759.id = "fetchCode";
      _0x50a759.checked = GM_getValue("fetchCode", false);
      _0x50a759.onchange = () => {
        GM_setValue("fetchCode", _0x50a759.checked);
      };
      const _0x2dabe9 = document.createElement("label");
      _0x2dabe9.htmlFor = "fetchCode";
      _0x2dabe9.textContent = "Auto chuyển trang";
      _0x2dabe9.style.marginLeft = "5px";
      _0x2dabe9.style.marginRight = "15px";
      const _0xd64774 = document.createElement("div");
      _0xd64774.style.display = "flex";
      _0xd64774.style.alignItems = "center";
      _0xd64774.appendChild(_0x50a759);
      _0xd64774.appendChild(_0x2dabe9);
      const _0xe3700c = document.createElement("input");
      _0xe3700c.type = "checkbox";
      _0xe3700c.id = "autoStart";
      _0xe3700c.checked = GM_getValue("autoStart", false);
      _0xe3700c.onchange = () => {
        GM_setValue("autoStart", _0xe3700c.checked);
      };
      const _0x517871 = document.createElement("label");
      _0x517871.htmlFor = "autoStart";
      _0x517871.textContent = "Auto Bypass (90%)";
      _0x517871.style.marginLeft = "5px";
      const _0x430b70 = document.createElement("div");
      _0x430b70.style.display = "flex";
      _0x430b70.style.alignItems = "center";
      _0x430b70.appendChild(_0xe3700c);
      _0x430b70.appendChild(_0x517871);
      _0x57e893.appendChild(_0xd64774);
      _0x57e893.appendChild(_0x430b70);
      _0x49a5dd.appendChild(_0x57e893);

      const _0x533886 = document.createElement("div");
      _0x533886.style.display = "flex";
      _0x533886.style.justifyContent = "space-between";
      _0x533886.style.fontSize = "14px";

      const _0x582de5 = document.createElement("button");
      _0x582de5.textContent = "Bắt đầu Bypass";
      _0x582de5.style.flex = "1";
      _0x582de5.style.padding = "7px";
      _0x582de5.style.backgroundColor = "#4CAF50";
      _0x582de5.style.color = "#fff";
      _0x582de5.style.border = "none";
      _0x582de5.style.cursor = "pointer";
      _0x582de5.style.marginRight = "5px";
      _0x582de5.style.borderRadius = "5px";
      _0x582de5.disabled = true;
      _0x582de5.onclick = async () => {
        try {
          _0x582de5.disabled = true;
          _0x5cf72e.readOnly = true;
          const _0x51145e = _0x5cf72e.value || _0x1af7db;
          _0x5cf72e.value = "Đang xử lý...";
          const _0x44a1cd = await _0x20c4d5(_0x51145e);
          if (_0x44a1cd) {
            let _0x1e1b9b = 70;
            const _0x1e33d5 = setInterval(() => {
              _0x5cf72e.value = "Vui lòng chờ: " + _0x1e1b9b + " giây";
              _0x1e1b9b--;
              _0x1e1b9b < 0 &&
                (clearInterval(_0x1e33d5),
                _0x50a759.checked
                  ? ((_0x5cf72e.value =
                      "Code: " + _0x44a1cd + " - Đang chuyển trang..."),
                    _0x313435(_0x44a1cd))
                  : (_0x5cf72e.value = "Code: " + _0x44a1cd),
                (_0x582de5.disabled = false));
            }, 1000);
          } else {
            _0x5cf72e.readOnly = false;
            console.error("Không có mã trả về từ startBypass");
            _0x5cf72e.value = "Lỗi! Vui lòng xem lại URL.";
            _0x582de5.disabled = false;
          }
          sessionStorage.removeItem("ymnclk");
          localStorage.removeItem("codexn");
        } catch (_0x189ccc) {
          console.error("Lỗi khi gọi startBypass:", _0x189ccc);
          _0x5cf72e.readOnly = false;
          _0x582de5.disabled = false;
        }
      };
      _0x533886.appendChild(_0x582de5);

      const _0x3f7ddd = document.createElement("button");
      _0x3f7ddd.textContent = "Đổi Nhiệm Vụ";
      _0x3f7ddd.style.flex = "1";
      _0x3f7ddd.style.padding = "7px";
      _0x3f7ddd.style.backgroundColor = "#F44336";
      _0x3f7ddd.style.color = "#fff";
      _0x3f7ddd.style.border = "none";
      _0x3f7ddd.style.cursor = "pointer";
      _0x3f7ddd.style.marginRight = "5px";
      _0x3f7ddd.style.borderRadius = "5px";
      _0x3f7ddd.disabled = true;
      _0x3f7ddd.onclick = async () => {
        _0x5cf72e.readOnly = true;
        _0x5cf72e.value = "Đang Đổi Nhiệm Vụ...";
        _0x6749c7();
      };
      _0x533886.appendChild(_0x3f7ddd);

      const _0xconfirmKey = document.createElement("button");
      _0xconfirmKey.textContent = "Xác nhận Key";
      _0xconfirmKey.style.flex = "1";
      _0xconfirmKey.style.padding = "7px";
      _0xconfirmKey.style.backgroundColor = "#2196F3";
      _0xconfirmKey.style.color = "#fff";
      _0xconfirmKey.style.border = "none";
      _0xconfirmKey.style.cursor = "pointer";
      _0xconfirmKey.style.borderRadius = "5px";
      _0xconfirmKey.onclick = async () => {
        const newKey = _0xkeyInput.value.trim();
        if (!newKey) {
          _0xkeyStatus.textContent = "Vui lòng nhập key!";
          _0xkeyStatus.style.color = "red";
          return;
        }
        _0xkeyStatus.textContent = "Đang kiểm tra key...";
        _0xkeyStatus.style.color = "gray";
        const isValid = await updateKey(newKey);
        if (isValid) {
          _0xkeyStatus.textContent = "Key hợp lệ";
          _0xkeyStatus.style.color = "green";
          _0x582de5.disabled = false;
          _0x3f7ddd.disabled = false;
        } else {
          _0xkeyStatus.textContent = "Key không hợp lệ!";
          _0xkeyStatus.style.color = "red";
          _0x582de5.disabled = true;
          _0x3f7ddd.disabled = true;
        }
      };
      _0x533886.appendChild(_0xconfirmKey);

      _0x49a5dd.appendChild(_0x533886);
      document.body.appendChild(_0x49a5dd);
      console.log("Giao diện tool đã được thêm vào trang");

      (async () => {
        const storedKey = GM_getValue("userKey", "");
        if (storedKey) {
          const isKeyValid = await checkKey(storedKey);
          _0xkeyStatus.textContent = isKeyValid
            ? "Key hợp lệ"
            : "Key không hợp lệ, vui lòng nhập lại!";
          _0xkeyStatus.style.color = isKeyValid ? "green" : "red";
          _0x582de5.disabled = !isKeyValid;
          _0x3f7ddd.disabled = !isKeyValid;
          if (isKeyValid && _0xe3700c.checked) {
            _0x582de5.click();
          }
        } else {
          _0xkeyStatus.textContent = "Key chưa nhập";
          _0xkeyStatus.style.color = "red";
          _0x582de5.disabled = true;
          _0x3f7ddd.disabled = true;
        }
      })();
    }

    _0x2873d5()
      .then((_0x170fc3) => {
        console.log("URL nhận diện thành công:", _0x170fc3);
        _0x3d4ed8(_0x170fc3);
      })
      .catch((_0x3c8c1d) => {
        console.error("Lỗi khi nhận diện URL:", _0x3c8c1d);
        _0x3d4ed8("Lỗi! Tự nhập URL hoặc Reload");
      });
  })();
})();
