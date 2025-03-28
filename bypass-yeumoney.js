// ==UserScript==
// @name         thu nhiem
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  Bypass Yeumoney with key input (effective from 8AM) and countdown
// @author       Baongococder & Grok
// @match        https://yeumoney.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_notification
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  // Hàm hash đơn giản cho key
  function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash).toString(36);
  }

  // Tạo key offline, chỉ hiệu lực từ 8h00 sáng
  function generateOfflineKey() {
    const date = new Date();
    const hours = date.getHours();
    let day, month, year;

    // Nếu trước 8h00 sáng, dùng ngày hôm qua
    if (hours < 8) {
      date.setDate(date.getDate() - 1); // Lùi lại 1 ngày
    }

    day = String(date.getDate()).padStart(2, "0");
    month = String(date.getMonth() + 1).padStart(2, "0");
    year = date.getFullYear();

    const dateStr = `${day}${month}${year}`;
    const hash = simpleHash(dateStr);
    const offlineKey = `key-${hash}`;
    console.log("Key offline được tạo:", offlineKey, "dựa trên ngày:", dateStr);
    return offlineKey;
  }

  // Kiểm tra key
  function checkKey(userKey) {
    const validKey = generateOfflineKey();
    console.log("So sánh key:", `"${userKey}" vs "${validKey}"`);
    return userKey === validKey;
  }

  // Cập nhật key
  function updateKey(newKey) {
    const validKey = generateOfflineKey();
    console.log("Kiểm tra key mới:", `"${newKey}" vs "${validKey}"`);
    if (newKey !== validKey) return false;
    GM_setValue("userKey", newKey);
    return true;
  }

  const _0x1b8b03 = 'https://traffic-user.net/GET_VUATRAFFIC.php',
    _0x5409d4 = 'https://traffic-user.net/GET_MA.php',
    _0x342b9f = 'https://www.google.com/',
    _0x34c038 = 'https://api.ocr.space/parse/imageurl?apikey=K81664733488957&isOverlayRequired=true&OCREngine=2';

  function _0x6749c7() {
    console.log('Đang đổi nhiệm vụ...');
    const _0x32edc7 = document.querySelector('#btn-baoloi');
    if (!_0x32edc7) return;
    _0x32edc7.click();
    setTimeout(() => {
      const _0x25ce2e = document.querySelector('#lydo_doima > center > a:nth-child(2)');
      if (_0x25ce2e) _0x25ce2e.click();
      setTimeout(() => {
        const _0x11cfea = document.querySelector('#lydo_doima > label:nth-child(8) > input[type=radio]');
        if (_0x11cfea) _0x11cfea.click();
        setTimeout(() => {
          const _0x422e98 = document.querySelector('#dongy_doima > a');
          if (_0x422e98) _0x422e98.click();
        }, 500);
      }, 500);
    }, 500);
  }

  function _0x2873d5() {
    return new Promise((_0x488e8e, _0x58d518) => {
      const _0x28ebb4 = document.querySelector('p#TK1')?.textContent.trim().toLowerCase() || "",
        _0x1ae1f2 = document.querySelector('img#halt_nv') || document.querySelector('img#hinh_nv'),
        _0x58b37d = _0x1ae1f2 ? _0x1ae1f2.src : null;
      if (_0x58b37d?.includes('placehold.co')) {
        setTimeout(() => _0x2873d5().then(_0x488e8e).catch(_0x58d518), 100);
        return;
      }
      const _0x28e99a = _0x34c038 + '&url=' + _0x58b37d,
        _0x45b2f2 = new XMLHttpRequest();
      _0x45b2f2.open('GET', _0x28e99a, true);
      _0x45b2f2.onload = function () {
        if (_0x45b2f2.status === 200) {
          const _0x537d3f = JSON.parse(_0x45b2f2.responseText),
            _0x45e678 = _0x537d3f.ParsedResults[0],
            _0x563b68 = _0x45e678.TextOverlay.Lines.filter(
              (_0x1a1624) => _0x1a1624.LineText.match(/\b[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\b/) &&
                _0x1a1624.Words?.some((_0x3ab640) => _0x3ab640.Top < 170)
            ).map((_0x2926af) => _0x2926af.LineText);
          let _0x4cee3e = '';
          if (_0x28ebb4 === '188bet') _0x4cee3e = 'https://88bet' + _0x563b68 + '/';
          else if (_0x28ebb4 === 'w88') _0x4cee3e = 'https://188.166.185.213/';
          else if (_0x28ebb4 === 'bk8') _0x4cee3e = 'https://bk8' + _0x563b68 + '/';
          else if (_0x28ebb4 === 'fb88') _0x4cee3e = 'https://fb88' + _0x563b68 + '/';
          else if (_0x28ebb4 === 'm88') _0x4cee3e = 'https://bet88' + _0x563b68 + '/';
          else if (_0x28ebb4 === 'vn88') _0x4cee3e = 'https://vn88' + _0x563b68 + '/';
          else if (_0x28ebb4 === 'v9bet') _0x4cee3e = 'https://v9bet' + _0x563b68 + '/';
          else _0x4cee3e = 'Chưa nhận diện được URL!';
          _0x488e8e(_0x4cee3e);
        } else {
          _0x58d518('Lỗi khi tải dữ liệu: ' + _0x45b2f2.status);
        }
      };
      _0x45b2f2.send();
    });
  }

  function _0x2ede3d() {
    const _0x591353 = Date.now();
    return _0x591353 + ',' + _0x342b9f + ',,IOS900,hidden,null';
  }

  function _0x2fa783(_0x4de4fd) {
    return new Promise((_0x36ec55, _0x330492) => {
      const _0x2e3813 = _0x2ede3d(),
        _0x8c347a = new XMLHttpRequest(),
        _0xea5dce = _0x1b8b03 + '?data=' + _0x2e3813 + '&clk=' + _0x4de4fd;
      _0x8c347a.open('POST', _0xea5dce, true);
      _0x8c347a.onload = function () {
        if (_0x8c347a.status === 200) {
          const _0x171aed = _0x8c347a.responseText,
            _0x47bdb0 = _0x171aed.match(/localStorage\.codexn\s*=\s*'([^']+)'/)?.[1];
          if (_0x47bdb0) {
            localStorage.codexn = _0x47bdb0;
            _0x36ec55(_0x47bdb0);
          } else {
            console.error('Không thể lấy mã codexn');
            _0x330492('Lỗi! Đổi nhiệm vụ khác và thử lại');
          }
        } else {
          _0x330492('Lỗi: ' + _0x8c347a.status);
        }
      };
      _0x8c347a.onerror = () => _0x330492('Lỗi mạng hoặc yêu cầu không thành công');
      _0x8c347a.send();
    });
  }

  function _0x1b4021(_0x11aaec, _0x1c2238, _0x212897, _0x531f40) {
    return new Promise((_0x39297f, _0x40c7d3) => {
      const _0x561cad = _0x5409d4 + '?codexn=' + _0x11aaec + '&url=' + _0x1c2238 +
        '&loai_traffic=' + _0x212897 + '&clk=' + _0x531f40,
        _0x341782 = new XMLHttpRequest();
      _0x341782.open('POST', _0x561cad, true);
      _0x341782.onload = function () {
        if (_0x341782.status === 200) {
          const _0xc8940f = _0x341782.responseText,
            _0x265dc1 = _0xc8940f.match(/sessionStorage\.setItem\("ymnclk", (\d+)\)/)?.[1];
          if (_0x265dc1) {
            sessionStorage.setItem('ymnclk', _0x265dc1);
            _0x39297f(_0x265dc1);
          } else {
            const _0x14bbc1 = new DOMParser().parseFromString(_0xc8940f, 'text/html'),
              _0x46f830 = _0x14bbc1.querySelector('span#layma_me_vuatraffic');
            if (_0x46f830) _0x39297f(_0x46f830.textContent.trim());
            else _0x40c7d3('URL Lỗi! Vui lòng kiểm tra lại.');
          }
        } else {
          _0x40c7d3('Lỗi: ' + _0x341782.status);
        }
      };
      _0x341782.onerror = () => _0x40c7d3('Lỗi mạng hoặc yêu cầu không thành công');
      _0x341782.send();
    });
  }

  function _0x313435(_0x26bb60) {
    const _0x2c2fff = document.querySelector('#gt-form')?.getAttribute('action') || '',
      _0x16eec3 = 'https://yeumoney.com' + _0x2c2fff,
      _0x1c1f9d = new FormData();
    _0x1c1f9d.append('code', _0x26bb60);
    _0x1c1f9d.append('keyword', '');
    _0x1c1f9d.append('dieuhanh', document.querySelector('input[name="dieuhanh"]')?.value || '');
    _0x1c1f9d.append('pix', document.querySelector('input[name="pix"]')?.value || '');
    _0x1c1f9d.append('lvp', document.querySelector('input[name="lvp"]')?.value || '');
    _0x1c1f9d.append('ref', '$ref');
    _0x1c1f9d.append('trinhduyet', document.getElementById('trinhduyet')?.value || '');
    _0x1c1f9d.append('id_traffic', document.getElementById('id_donhang')?.value || '');
    _0x1c1f9d.append('check_index', '1');
    const _0x58f355 = new URLSearchParams(_0x1c1f9d).toString();
    GM_xmlhttpRequest({
      method: 'POST',
      url: _0x16eec3,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': navigator.userAgent,
        Referer: 'https://yeumoney.com/',
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
        _0x4b5d19 = _0x3d2a4e.replace(/\/$/, ''),
        _0x393918 = await _0x1b4021(_0x56469f, _0x4b5d19, _0x342b9f, null),
        _0x511f76 = await _0x2fa783(_0x393918),
        _0x3e99b8 = _0x3d2a4e + 'admin',
        _0x3e7910 = await _0x1b4021(_0x511f76, _0x3e99b8, _0x3d2a4e, _0x393918);
      return _0x3e7910;
    } catch (_0x564c0d) {
      console.error('Lỗi trong startBypass:', _0x564c0d);
      return null;
    }
  }

  function _0x3d4ed8(_0x1af7db) {
    const _0x49a5dd = document.createElement('div');
    _0x49a5dd.style.cssText = `
      position: fixed; top: 10px; right: 10px; background: #f9f9f9;
      border: 1px solid #ccc; padding: 10px; z-index: 9999; width: 350px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 10px;
    `;

    const _0x28f938 = document.createElement('h4');
    _0x28f938.textContent = 'Script By Baongococder';
    _0x28f938.style.cssText = `
      margin: 0; margin-bottom: 10px; font-size: 10px; font-style: italic; text-align: center;
      background: linear-gradient(90deg, red, orange, brown, green, blue, indigo, violet, indigo, blue, green, brown, orange, red);
      background-size: 200% auto; color: transparent; background-clip: text; -webkit-background-clip: text;
      animation: rainbowMove 5s linear infinite;
    `;
    _0x49a5dd.appendChild(_0x28f938);

    const _0x1d9137 = document.createElement('style');
    _0x1d9137.textContent = '@keyframes rainbowMove { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }';
    document.head.appendChild(_0x1d9137);

    const keyLabel = document.createElement('h3');
    keyLabel.textContent = 'Nhập Key:';
    keyLabel.style.cssText = 'margin: 0; font-weight: bold; margin-bottom: 5px; font-size: 16px; color: darkblue;';
    _0x49a5dd.appendChild(keyLabel);

    const keyInput = document.createElement('input');
    keyInput.type = 'text';
    keyInput.placeholder = 'Nhập key (key-xxxxx)';
    keyInput.value = GM_getValue('userKey', '');
    keyInput.style.cssText = 'width: 100%; margin-bottom: 10px; padding: 8px; font-size: 14px;';
    _0x49a5dd.appendChild(keyInput);

    const keyStatus = document.createElement('h4');
    keyStatus.style.cssText = 'margin: 0; margin-bottom: 10px; font-size: 13px;';
    const storedKey = GM_getValue('userKey', '');
    keyStatus.textContent = storedKey ? 'Đang kiểm tra key...' : 'Key chưa nhập';
    keyStatus.style.color = 'gray';
    _0x49a5dd.appendChild(keyStatus);

    const _0x2cb68f = document.createElement('h3');
    _0x2cb68f.textContent = 'Nhập URL nhiệm vụ:';
    _0x2cb68f.style.cssText = 'margin: 0; font-weight: bold; margin-bottom: 10px; font-size: 16px; color: darkred;';
    _0x49a5dd.appendChild(_0x2cb68f);

    const _0x5cf72e = document.createElement('input');
    _0x5cf72e.readOnly = false;
    _0x5cf72e.placeholder = 'Nếu để trống sẽ sử dụng URL nhận diện!';
    _0x5cf72e.style.cssText = 'width: 100%; margin-bottom: 10px; padding: 8px; font-size: 14px;';
    _0x49a5dd.appendChild(_0x5cf72e);

    const _0x497cbe = document.createElement('h4');
    _0x497cbe.textContent = 'URL nhận diện (OCR): ' + _0x1af7db;
    _0x497cbe.style.cssText = 'margin: 0; margin-bottom: 10px; font-size: 13px; color: brown;';
    _0x49a5dd.appendChild(_0x497cbe);

    const _0x57e893 = document.createElement('div');
    _0x57e893.style.cssText = 'display: flex; align-items: center; margin-bottom: 10px; font-size: 14px; color: chocolate;';
    const _0x50a759 = document.createElement('input');
    _0x50a759.type = 'checkbox';
    _0x50a759.id = 'fetchCode';
    _0x50a759.checked = GM_getValue('fetchCode', false);
    _0x50a759.onchange = () => GM_setValue('fetchCode', _0x50a759.checked);
    const _0x2dabe9 = document.createElement('label');
    _0x2dabe9.htmlFor = 'fetchCode';
    _0x2dabe9.textContent = 'Auto chuyển trang';
    _0x2dabe9.style.margin = '0 5px 0 15px';
    const _0xd64774 = document.createElement('div');
    _0xd64774.style.display = 'flex';
    _0xd64774.style.alignItems = 'center';
    _0xd64774.appendChild(_0x50a759);
    _0xd64774.appendChild(_0x2dabe9);
    const _0xe3700c = document.createElement('input');
    _0xe3700c.type = 'checkbox';
    _0xe3700c.id = 'autoStart';
    _0xe3700c.checked = GM_getValue('autoStart', false);
    _0xe3700c.onchange = () => GM_setValue('autoStart', _0xe3700c.checked);
    const _0x517871 = document.createElement('label');
    _0x517871.htmlFor = 'autoStart';
    _0x517871.textContent = 'Auto Bypass (90%)';
    _0x517871.style.marginLeft = '5px';
    const _0x430b70 = document.createElement('div');
    _0x430b70.style.display = 'flex';
    _0x430b70.style.alignItems = 'center';
    _0x430b70.appendChild(_0xe3700c);
    _0x430b70.appendChild(_0x517871);
    _0x57e893.appendChild(_0xd64774);
    _0x57e893.appendChild(_0x430b70);
    _0x49a5dd.appendChild(_0x57e893);

    const _0x533886 = document.createElement('div');
    _0x533886.style.cssText = 'display: flex; justify-content: space-between; font-size: 14px;';

    const _0x582de5 = document.createElement('button');
    _0x582de5.textContent = 'Bắt đầu Bypass';
    _0x582de5.style.cssText = 'flex: 1; padding: 7px; background: #4CAF50; color: #fff; border: none; cursor: pointer; margin-right: 5px; border-radius: 5px;';
    _0x582de5.disabled = true;
    _0x582de5.onclick = async () => {
      _0x582de5.disabled = true;
      _0x5cf72e.readOnly = true;
      const _0x51145e = _0x5cf72e.value || _0x1af7db;
      _0x5cf72e.value = 'Đang xử lý...';
      const _0x44a1cd = await _0x20c4d5(_0x51145e);
      if (_0x44a1cd) {
        let _0x1e1b9b = 70;
        const _0x1e33d5 = setInterval(() => {
          _0x5cf72e.value = 'Vui lòng chờ: ' + _0x1e1b9b + ' giây';
          _0x1e1b9b--;
          if (_0x1e1b9b < 0) {
            clearInterval(_0x1e33d5);
            if (_0x50a759.checked) {
              _0x5cf72e.value = 'Code: ' + _0x44a1cd + ' - Đang chuyển trang...';
              _0x313435(_0x44a1cd);
            } else {
              _0x5cf72e.value = 'Code: ' + _0x44a1cd;
              _0x582de5.disabled = false;
            }
          }
        }, 1000);
      } else {
        _0x5cf72e.readOnly = false;
        _0x5cf72e.value = 'Lỗi! Vui lòng xem lại URL.';
        _0x582de5.disabled = false;
      }
      sessionStorage.removeItem('ymnclk');
      localStorage.removeItem('codexn');
    };
    _0x533886.appendChild(_0x582de5);

    const _0x3f7ddd = document.createElement('button');
    _0x3f7ddd.textContent = 'Đổi Nhiệm Vụ';
    _0x3f7ddd.style.cssText = 'flex: 1; padding: 7px; background: #F44336; color: #fff; border: none; cursor: pointer; margin-right: 5px; border-radius: 5px;';
    _0x3f7ddd.disabled = true;
    _0x3f7ddd.onclick = () => {
      _0x5cf72e.readOnly = true;
      _0x5cf72e.value = 'Đang Đổi Nhiệm Vụ...';
      _0x6749c7();
    };
    _0x533886.appendChild(_0x3f7ddd);

    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'Xác nhận Key';
    confirmBtn.style.cssText = 'flex: 1; padding: 7px; background: #2196F3; color: #fff; border: none; cursor: pointer; border-radius: 5px;';
    confirmBtn.onclick = () => {
      const newKey = keyInput.value.trim();
      if (!newKey) {
        keyStatus.textContent = 'Vui lòng nhập key!';
        keyStatus.style.color = 'red';
        return;
      }
      keyStatus.textContent = 'Đang kiểm tra key...';
      keyStatus.style.color = 'gray';
      const isValid = updateKey(newKey);
      keyStatus.textContent = isValid ? 'Key hợp lệ' : 'Key không hợp lệ!';
      keyStatus.style.color = isValid ? 'green' : 'red';
      _0x582de5.disabled = !isValid;
      _0x3f7ddd.disabled = !isValid;
    };
    _0x533886.appendChild(confirmBtn);

    _0x49a5dd.appendChild(_0x533886);
    document.body.appendChild(_0x49a5dd);

    if (storedKey) {
      const isValid = checkKey(storedKey);
      keyStatus.textContent = isValid ? 'Key hợp lệ' : 'Key không hợp lệ!';
      keyStatus.style.color = isValid ? 'green' : 'red';
      _0x582de5.disabled = !isValid;
      _0x3f7ddd.disabled = !isValid;
      if (isValid && _0xe3700c.checked) _0x582de5.click();
    }
  }

  window.onload = () => {
    _0x2873d5()
      .then((_0x170fc3) => _0x3d4ed8(_0x170fc3))
      .catch((_0x3c8c1d) => {
        console.error('Lỗi khi nhận diện URL:', _0x3c8c1d);
        _0x3d4ed8('Lỗi! Tự nhập URL hoặc Reload');
      });
  };
})();
