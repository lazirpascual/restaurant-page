(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("nav-bar");const n=document.createElement("div");n.classList.add("nav-items"),n.textContent="HOME",n.id="home-id",t.appendChild(n);const d=document.createElement("div");d.classList.add("nav-items"),d.textContent="MENU",d.id="menu-id",t.appendChild(d);const o=document.createElement("div");o.classList.add("nav-items"),o.textContent="ABOUT",o.id="about-id",t.appendChild(o),e.appendChild(t)},t=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},n=()=>{const o=document.querySelector("#content");document.querySelector("#home-id").addEventListener("click",(function(e){t(o),d()})),document.querySelector("#menu-id").addEventListener("click",(function(d){t(o),(()=>{const t=document.querySelector("#html");t.classList.remove("home-background"),t.classList.remove("about-background"),t.classList.add("menu-background"),e(),n()})()})),document.querySelector("#about-id").addEventListener("click",(function(d){t(o),(()=>{const t=document.querySelector("#html");t.classList.remove("home-background"),t.classList.remove("menu-background"),t.classList.add("about-background");const d=document.querySelector("#content"),o=document.createElement("div");o.classList.add("restaurant-info");const c=document.createElement("div");c.textContent="Location";const a=document.createElement("div");a.classList.add("info-box"),a.textContent="82 King Street, Kitchener, ON",c.appendChild(a),o.appendChild(c);const s=document.createElement("div");s.textContent="Hours";const i=document.createElement("div");i.classList.add("info-box"),i.textContent="Mon - Sat, 10am - 9pm",s.appendChild(i),o.appendChild(s);const l=document.createElement("div");l.textContent="Contact";const r=document.createElement("div");r.classList.add("info-box"),r.textContent="dyneforfree@hotmail.ca",l.appendChild(r),o.appendChild(l),e(),d.appendChild(o),n()})()}))},d=()=>{const t=document.querySelector("#html");t.classList.remove("menu-background"),t.classList.remove("about-background"),t.classList.add("home-background");const d=document.querySelector("#content"),o=document.createElement("div");o.classList.add("slogan"),o.textContent="FRESH. FAST. TASTY",e(),d.appendChild(o),n()};d()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2LWJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFiLXN3aXRjaC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZU5hdkJhciIsIm1haW5Db250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZCYXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaG9tZSIsInRleHRDb250ZW50IiwiaWQiLCJhcHBlbmRDaGlsZCIsIm1lbnUiLCJhYm91dCIsImNsZWFyQ29udGFpbmVyIiwicGFyZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNyZWF0ZUluaXRpYWxQYWdlIiwiaHRtbENvbnRhaW5lciIsInJlbW92ZSIsImNyZWF0ZU1lbnVQYWdlIiwicmVzdGF1cmFudEluZm8iLCJsb2NhdGlvbiIsInN0cmVldCIsImhvdXJzIiwiYXZhaWxhYmlsaXR5IiwiY29udGFjdCIsImVtYWlsIiwiY3JlYXRlQWJvdXRQYWdlIiwic2xvZ2FuIl0sIm1hcHBpbmdzIjoibUJBQU8sTUFBTUEsRUFBZSxLQUN4QixNQUFNQyxFQUFnQkMsU0FBU0MsY0FBYyxZQUN2Q0MsRUFBU0YsU0FBU0csY0FBYyxPQUN0Q0QsRUFBT0UsVUFBVUMsSUFBSSxXQUdyQixNQUFNQyxFQUFPTixTQUFTRyxjQUFjLE9BQ3BDRyxFQUFLRixVQUFVQyxJQUFJLGFBQ25CQyxFQUFLQyxZQUFjLE9BQ25CRCxFQUFLRSxHQUFLLFVBQ1ZOLEVBQU9PLFlBQVlILEdBQ25CLE1BQU1JLEVBQU9WLFNBQVNHLGNBQWMsT0FDcENPLEVBQUtOLFVBQVVDLElBQUksYUFDbkJLLEVBQUtILFlBQWMsT0FDbkJHLEVBQUtGLEdBQUssVUFDVk4sRUFBT08sWUFBWUMsR0FDbkIsTUFBTUMsRUFBUVgsU0FBU0csY0FBYyxPQUNyQ1EsRUFBTVAsVUFBVUMsSUFBSSxhQUNwQk0sRUFBTUosWUFBYyxRQUNwQkksRUFBTUgsR0FBSyxXQUNYTixFQUFPTyxZQUFZRSxHQUVuQlosRUFBY1UsWUFBWVAsSUNsQnhCVSxFQUFpQkMsSUFDbkIsS0FBT0EsRUFBT0MsWUFDVkQsRUFBT0UsWUFBWUYsRUFBT0MsYUFJckJFLEVBQW9CLEtBRTdCLE1BQU1qQixFQUFnQkMsU0FBU0MsY0FBYyxZQUM1QkQsU0FBU0MsY0FBYyxZQUMvQmdCLGlCQUFpQixTQUFTLFNBQVNDLEdBQ3hDTixFQUFlYixHQUNmb0IsT0FJYW5CLFNBQVNDLGNBQWMsWUFDL0JnQixpQkFBaUIsU0FBUyxTQUFTQyxHQUN4Q04sRUFBZWIsR0NuQk8sTUFFMUIsTUFBTXFCLEVBQWdCcEIsU0FBU0MsY0FBYyxTQUM3Q21CLEVBQWNoQixVQUFVaUIsT0FBTyxtQkFDL0JELEVBQWNoQixVQUFVaUIsT0FBTyxvQkFDL0JELEVBQWNoQixVQUFVQyxJQUFJLG1CQUU1QlAsSUFDQWtCLEtEWUlNLE1BSWN0QixTQUFTQyxjQUFjLGFBQy9CZ0IsaUJBQWlCLFNBQVMsU0FBU0MsR0FDekNOLEVBQWViLEdFMUJRLE1BRTNCLE1BQU1xQixFQUFnQnBCLFNBQVNDLGNBQWMsU0FDN0NtQixFQUFjaEIsVUFBVWlCLE9BQU8sbUJBQy9CRCxFQUFjaEIsVUFBVWlCLE9BQU8sbUJBQy9CRCxFQUFjaEIsVUFBVUMsSUFBSSxvQkFHNUIsTUFBTU4sRUFBZ0JDLFNBQVNDLGNBQWMsWUFDdkNzQixFQUFpQnZCLFNBQVNHLGNBQWMsT0FDOUNvQixFQUFlbkIsVUFBVUMsSUFBSSxtQkFHN0IsTUFBTW1CLEVBQVd4QixTQUFTRyxjQUFjLE9BQ3hDcUIsRUFBU2pCLFlBQWMsV0FDdkIsTUFBTWtCLEVBQVN6QixTQUFTRyxjQUFjLE9BQ3RDc0IsRUFBT3JCLFVBQVVDLElBQUksWUFDckJvQixFQUFPbEIsWUFBYyxnQ0FDckJpQixFQUFTZixZQUFZZ0IsR0FDckJGLEVBQWVkLFlBQVllLEdBRTNCLE1BQU1FLEVBQVExQixTQUFTRyxjQUFjLE9BQ3JDdUIsRUFBTW5CLFlBQWMsUUFDcEIsTUFBTW9CLEVBQWUzQixTQUFTRyxjQUFjLE9BQzVDd0IsRUFBYXZCLFVBQVVDLElBQUksWUFDM0JzQixFQUFhcEIsWUFBYyx3QkFDM0JtQixFQUFNakIsWUFBWWtCLEdBQ2xCSixFQUFlZCxZQUFZaUIsR0FFM0IsTUFBTUUsRUFBVTVCLFNBQVNHLGNBQWMsT0FDdkN5QixFQUFRckIsWUFBYyxVQUN0QixNQUFNc0IsRUFBUTdCLFNBQVNHLGNBQWMsT0FDckMwQixFQUFNekIsVUFBVUMsSUFBSSxZQUNwQndCLEVBQU10QixZQUFjLHlCQUNwQnFCLEVBQVFuQixZQUFZb0IsR0FDcEJOLEVBQWVkLFlBQVltQixHQUUzQjlCLElBQ0FDLEVBQWNVLFlBQVljLEdBQzFCUCxLRlpJYyxPRzNCS1gsRUFBb0IsS0FFN0IsTUFBTUMsRUFBZ0JwQixTQUFTQyxjQUFjLFNBQzdDbUIsRUFBY2hCLFVBQVVpQixPQUFPLG1CQUMvQkQsRUFBY2hCLFVBQVVpQixPQUFPLG9CQUMvQkQsRUFBY2hCLFVBQVVDLElBQUksbUJBRzVCLE1BQU1OLEVBQWdCQyxTQUFTQyxjQUFjLFlBQ3ZDOEIsRUFBUy9CLFNBQVNHLGNBQWMsT0FDdEM0QixFQUFPM0IsVUFBVUMsSUFBSSxVQUNyQjBCLEVBQU94QixZQUFjLHFCQUVyQlQsSUFDQUMsRUFBY1UsWUFBWXNCLEdBQzFCZixLQ2hCSkcsSyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpO1xuXG4gICAgLy8gY3JlYXRlIHRocmVlIHNlY3Rpb25zOyBob21lLCBtZW51LCBhbmQgYWJvdXRcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbXMnKTtcbiAgICBob21lLnRleHRDb250ZW50ID0gXCJIT01FXCI7XG4gICAgaG9tZS5pZCA9ICdob21lLWlkJztcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW1zJyk7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICAgIG1lbnUuaWQgPSAnbWVudS1pZCc7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW1zJyk7XG4gICAgYWJvdXQudGV4dENvbnRlbnQgPSBcIkFCT1VUXCI7XG4gICAgYWJvdXQuaWQgPSAnYWJvdXQtaWQnO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChhYm91dCk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVJbml0aWFsUGFnZSB9IGZyb20gJy4vaG9tZSdcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSAnLi9tZW51J1xuaW1wb3J0IHsgY3JlYXRlQWJvdXRQYWdlIH0gZnJvbSAnLi9hYm91dCdcblxuY29uc3QgY2xlYXJDb250YWluZXIgPSBwYXJlbnQgPT4ge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAvLyBzd2l0Y2ggdG8gaG9tZSBwYWdlIG9uIGJ1dHRvbiBjbGlja1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtaWQnKTtcbiAgICBob21lUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY2xlYXJDb250YWluZXIobWFpbkNvbnRhaW5lcik7XG4gICAgICAgIGNyZWF0ZUluaXRpYWxQYWdlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBzd2l0Y2ggdG8gbWVudSBwYWdlIG9uIGJ1dHRvbiBjbGlja1xuICAgIGNvbnN0IG1lbnVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtaWQnKTtcbiAgICBtZW51UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY2xlYXJDb250YWluZXIobWFpbkNvbnRhaW5lcik7XG4gICAgICAgIGNyZWF0ZU1lbnVQYWdlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBzd2l0Y2ggdG8gYWJvdXQgcGFnZSBvbiBidXR0b24gY2xpY2tcbiAgICBjb25zdCBhYm91dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtaWQnKTtcbiAgICBhYm91dFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNsZWFyQ29udGFpbmVyKG1haW5Db250YWluZXIpO1xuICAgICAgICBjcmVhdGVBYm91dFBhZ2UoKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZU5hdkJhciB9IGZyb20gJy4vbmF2LWJhcidcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi90YWItc3dpdGNoJ1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTWVudVBhZ2UgPSAoKSA9PiB7XG4gICAgLy8gY2hhbmdlIG1lbnUgYmFja2dyb3VuZFxuICAgIGNvbnN0IGh0bWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHRtbCcpO1xuICAgIGh0bWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZS1iYWNrZ3JvdW5kJyk7XG4gICAgaHRtbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhYm91dC1iYWNrZ3JvdW5kJyk7XG4gICAgaHRtbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWJhY2tncm91bmQnKTtcblxuICAgIGNyZWF0ZU5hdkJhcigpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG59IiwiaW1wb3J0IHsgY3JlYXRlTmF2QmFyIH0gZnJvbSAnLi9uYXYtYmFyJ1xuaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICcuL3RhYi1zd2l0Y2gnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBYm91dFBhZ2UgPSAoKSA9PiB7XG4gICAgLy8gY2hhbmdlIGFib3V0IGJhY2tncm91bmRcbiAgICBjb25zdCBodG1sQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h0bWwnKTtcbiAgICBodG1sQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUtYmFja2dyb3VuZCcpO1xuICAgIGh0bWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1iYWNrZ3JvdW5kJyk7XG4gICAgaHRtbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dC1iYWNrZ3JvdW5kJyk7XG5cbiAgICAvLyBjcmVhdGUgc2VjdGlvbiBmb3IgcmVzdGF1cmFudCBpbmZvXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3QgcmVzdGF1cmFudEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXN0YXVyYW50SW5mby5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LWluZm8nKTtcblxuICAgIC8vY3JlYXRlIHRocmVlIHNlY3Rpb25zIGluIHJlc3RhdXJhbnQgaW5mbywgbG9jYXRpb24sIGhvdXJzLCBhbmQgY29udGFjdFxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG4gICAgY29uc3Qgc3RyZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RyZWV0LmNsYXNzTGlzdC5hZGQoJ2luZm8tYm94Jyk7XG4gICAgc3RyZWV0LnRleHRDb250ZW50ID0gXCI4MiBLaW5nIFN0cmVldCwgS2l0Y2hlbmVyLCBPTlwiO1xuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKHN0cmVldCk7XG4gICAgcmVzdGF1cmFudEluZm8uYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vycy50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcbiAgICBjb25zdCBhdmFpbGFiaWxpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhdmFpbGFiaWxpdHkuY2xhc3NMaXN0LmFkZCgnaW5mby1ib3gnKTtcbiAgICBhdmFpbGFiaWxpdHkudGV4dENvbnRlbnQgPSBcIk1vbiAtIFNhdCwgMTBhbSAtIDlwbVwiO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGF2YWlsYWJpbGl0eSk7XG4gICAgcmVzdGF1cmFudEluZm8uYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2luZm8tYm94Jyk7XG4gICAgZW1haWwudGV4dENvbnRlbnQgPSBcImR5bmVmb3JmcmVlQGhvdG1haWwuY2FcIjtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICByZXN0YXVyYW50SW5mby5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIGNyZWF0ZU5hdkJhcigpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEluZm8pO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG59IiwiaW1wb3J0IHsgY3JlYXRlTmF2QmFyIH0gZnJvbSAnLi9uYXYtYmFyJ1xuaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICcuL3RhYi1zd2l0Y2gnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJbml0aWFsUGFnZSA9ICgpID0+IHtcbiAgICAvLyBjaGFuZ2UgaG9tZSBiYWNrZ3JvdW5kXG4gICAgY29uc3QgaHRtbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodG1sJyk7XG4gICAgaHRtbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWJhY2tncm91bmQnKTtcbiAgICBodG1sQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Fib3V0LWJhY2tncm91bmQnKTtcbiAgICBodG1sQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYmFja2dyb3VuZCcpO1xuXG4gICAgLy8gY3JlYXRlIHNlY3Rpb24gZm9yIHNsb2dhblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNsb2dhbi5jbGFzc0xpc3QuYWRkKCdzbG9nYW4nKTtcbiAgICBzbG9nYW4udGV4dENvbnRlbnQgPSBcIkZSRVNILiBGQVNULiBUQVNUWVwiO1xuXG4gICAgY3JlYXRlTmF2QmFyKCk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzbG9nYW4pO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbiIsImltcG9ydCB7IGNyZWF0ZUluaXRpYWxQYWdlIH0gZnJvbSAnLi9ob21lJ1xuXG5jcmVhdGVJbml0aWFsUGFnZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=