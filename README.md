# Piloty

Uniwersalny pilot do Home Assistant: **telewizor z Android TV + amplituner Yamaha (YNCA)** w jednej karcie, z 13 szatami graficznymi do wyboru.

- **Kafelek albo karta** – kafelek pokazuje status i po kliknięciu otwiera pilota w oknie; karta pokazuje pilota od razu.
- **3 zakładki** – Uniwersalny, Telewizor, Amplituner. Zakładka Amplituner ma pełny pilot Yamahy: wejścia, sceny, Sleep, tryby Movie/Music/Sur.Decode/Straight/Enhancer/Direct, menu, tuner, odtwarzanie i 16 trybów DSP.
- **Apki** – Apple TV, Netflix, YouTube, Prime, Player, HBO Max, Polsat Go, Disney+, Spotify, HDMI 1. Każda odpala się na TV i przełącza amplituner na HDMI1.
- **Głośność zawsze przez amplituner**, a jeden przycisk Power włącza lub wyłącza oba urządzenia.
- **Status na żywo** – czy TV i amplituner są włączone, co leci, wejście i głośność.
- **13 szat** – Krem, Niebieski neon, Arctic, Czarny chrom, Mechaniczny, Drewno i mosiądz, Synthwave, Grafit minimal, Hologram, Samochodowy, Leśny, Ocean, Kosmos. Wszystkie poza Kremem mają animowane przyciski. Wybór zapisuje się na koncie użytkownika HA, a opcjonalnie tylko na danym urządzeniu.

## Wymagania

- Integracja **Android TV Remote** (encje `remote.*` i `media_player.*` telewizora)
- Integracja **Yamaha (YNCA)** z HACS (encja `media_player.*` amplitunera, opcjonalnie `remote.*`)

## Instalacja (HACS)

1. HACS → menu ⋮ → **Niestandardowe repozytoria** → `https://github.com/voltronicpl/piloty`, typ **Dashboard**.
2. Wyszukaj **Piloty** i zainstaluj.
3. Odśwież przeglądarkę lub apkę (czyszczenie pamięci podręcznej).

## Konfiguracja

```yaml
type: custom:piloty-card
mode: tile                 # tile = kafelek + okno, card = pełny pilot od razu
room: Salon
tv_remote: remote.telewizor
tv_player: media_player.telewizor
amp: media_player.amplituner
amp_remote: remote.amplituner              # opcjonalnie – menu amplitunera (Setup, Option, krzyżak…)
amp_volume_db: number.amplituner_volume_db  # opcjonalnie – głośność w dB
amp_source: HDMI1                          # wejście ustawiane przy starcie apki
theme: cream                               # domyślna szata, dopóki ktoś nie wybierze swojej
```

### Wszystkie opcje

| Opcja | Wymagana | Opis |
|---|---|---|
| `tv_remote` | tak | `remote.*` z Android TV Remote |
| `amp` | tak | `media_player.*` amplitunera |
| `tv_player` | nie | `media_player.*` telewizora – status i aktualnie otwarta apka |
| `amp_remote` | nie | `remote.*` z YNCA – sekcja Menu w zakładce Amplituner |
| `amp_volume_db` | nie | encja `number` z głośnością w dB; bez niej głośność jest w % |
| `amp_scenes` | nie | lista encji `button.*` scen; domyślnie wykrywane automatycznie |
| `amp_tuner_band` | nie | encja `select` pasma tunera (FM/AM); domyślnie wykrywana automatycznie |
| `amp_tuner_preset` | nie | encja `number`/`select` presetu tunera; wykrywana automatycznie |
| `amp_tuner_fm` / `amp_tuner_am` | nie | encje `number` częstotliwości FM/AM (Tuning ±); wykrywane automatycznie |
| `amp_sleep` | nie | encja `select` timera Sleep; wykrywana automatycznie |
| `amp_enhancer` / `amp_direct` | nie | encje `switch` Enhancer i Direct; wykrywane automatycznie |
| `amp_modes` | nie | lista trybów DSP na dole zakładki Amplituner (domyślnie 16 popularnych) |
| `amp_source` | nie | wejście amplitunera dla apek, domyślnie `HDMI1` |
| `mode` | nie | `tile` (domyślnie) lub `card` |
| `room` | nie | nagłówek, domyślnie `Salon` |
| `theme` | nie | `cream`, `neon`, `arctic`, `chrome`, `steam`, `wood`, `synth`, `graphite`, `holo`, `car`, `forest`, `ocean`, `space` |
| `apps` | nie | własna lista apek (zastępuje domyślną) |

### Własne apki

```yaml
apps:
  - name: Netflix
    short: N
    color: "#e50914"
    activity: com.netflix.ninja       # pakiet albo link uruchamiany przez remote.turn_on
  - name: HDMI 1
    short: "⇥"
    color: "#5a6270"
    command: TV_INPUT_HDMI_1          # zamiast apki: komenda pilota
    amp_source: false                 # nie przełączaj amplitunera
```

Domyślne nazwy pakietów apek mogą się różnić w zależności od telewizora. Jeżeli któraś apka się nie odpala, sprawdź jej `app_id` w atrybutach `media_player` telewizora (Narzędzia deweloperskie → Stany) i wpisz go w `activity`.

## Wybór szaty

Ikona zębatki na pilocie otwiera listę szat:

- **Konto** – zapisuje szatę na użytkowniku HA, więc jest taka sama na każdym urządzeniu.
- **To urządzenie** – nadpisuje szatę tylko na tym telefonie lub tablecie.
- **Wyczyść dla tego urządzenia** – wraca do szaty z konta.

## Licencja

MIT
