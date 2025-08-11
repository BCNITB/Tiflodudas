import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { AccesComponent } from './acces/acces.component';

/* Writers */
import { OrbitComponent } from './orbit/orbit.component';
import { BrailleComponent } from './braille/braille.component';
import { BraillantComponent } from './braillant/braillant.component';
import { BrailleLiteComponent } from './braille-lite/braille-lite.component';

/* Embossers */
import { IndexComponent } from './index/index.component';
import { PortathielComponent } from './portathiel/portathiel.component';
import { ImpactoComponent } from './impacto/impacto.component';

/* Screen Readers */
import { JawsComponent } from './jaws/jaws.component';
import { NarradorComponent } from './narrador/narrador.component';
import { NvdaComponent } from './nvda/nvda.component';
import { TalkbackComponent } from './talkback/talkback.component';
import { VAssistantComponent } from './v-assistant/v-assistant.component';
import { VViewComponent } from './v-view/v-view.component';
import { VOverComponent } from './v-over/v-over.component';

/* Braille Display */
import { AlvaComponent } from './alva/alva.component';
import { EcoComponent } from './eco/eco.component';
import { FocusComponent } from './focus/focus.component';
import { VarioUltraComponent } from './vario-ultra/vario-ultra.component';

/* Magnifiers */
import { AmpAndroidComponent } from './amp-android/amp-android.component';
import { AmpLinuxComponent } from './amp-linux/amp-linux.component';
import { AmpIosComponent } from './amp-ios/amp-ios.component';
import { AmpMacComponent } from './amp-mac/amp-mac.component';
import { LupaWinComponent } from './lupa-win/lupa-win.component';
import { ZoomTextComponent } from './zoom-text/zoom-text.component';

/* Phones */
import { BlindShellComponent } from './blind-shell/blind-shell.component';

/* Education soft */
import { BmeComponent } from './bme/bme.component';
import { EbraiComponent } from './ebrai/ebrai.component';
import { EdicoComponent } from './edico/edico.component';

/* SmartSpeakers */
import { AlexaComponent } from './alexa/alexa.component';
import { GoogleAsComponent } from './google-as/google-as.component';
import { SiriComponent } from './siri/siri.component';

/* Typing */
import { DioComponent } from './dio/dio.component';
import { MecanetComponent } from './mecanet/mecanet.component';
import { MekantaComponent } from './mekanta/mekanta.component';
import { MioComponent } from './mio/mio.component';
import { TecladoComponent } from './teclado/teclado.component';

/* OCR */
import { FineReaderComponent } from './fine-reader/fine-reader.component';
import { OmniPageComponent } from './omni-page/omni-page.component';

/* Daisy Players */
import { GoldComponent } from './gold/gold.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { PlextalkComponent } from './plextalk/plextalk.component';
import { StratusComponent } from './stratus/stratus.component';
import { StreamComponent } from './stream/stream.component';

/* Telelupas */
import { TvlupaComponent } from './tvlupa/tvlupa.component';
import { StudentComponent } from './student/student.component';
import { TransformerComponent } from './transformer/transformer.component';

/* ONCE Soft */
import { ClubOnceComponent } from './club-once/club-once.component';
import { PortalOnceComponent } from './portal-once/portal-once.component';
import { ApoloComponent } from './apolo/apolo.component';
import { CtiComponent } from './cti/cti.component';

/* MISCELANEOUS */
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';
import { RepositorioComponent } from './repositorio/repositorio.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';

@NgModule({
  declarations: [
    RegisterComponent,
    AccesComponent,
    OrbitComponent,
    BrailleComponent,
    BraillantComponent,
    BrailleLiteComponent,
    IndexComponent,
    PortathielComponent,
    ImpactoComponent,
    JawsComponent,
    NarradorComponent,
    NvdaComponent,
    TalkbackComponent,
    VAssistantComponent,
    VViewComponent,
    VOverComponent,
    AlvaComponent,
    EcoComponent,
    FocusComponent,
    VarioUltraComponent,
    AmpAndroidComponent,
    AmpIosComponent,
    AmpLinuxComponent,
    AmpMacComponent,
    LupaWinComponent,
    ZoomTextComponent,
    BlindShellComponent,
    BmeComponent,
    EbraiComponent,
    EdicoComponent,
    AlexaComponent,
    GoogleAsComponent,
    SiriComponent,
    DioComponent,
    MecanetComponent,
    MekantaComponent,
    MioComponent,
    TecladoComponent,
    FineReaderComponent,
    OmniPageComponent,
    GoldComponent,
    MilestoneComponent,
    PlextalkComponent,
    StratusComponent,
    StreamComponent,
    TvlupaComponent,
    StudentComponent,
    TransformerComponent,
    ClubOnceComponent,
    PortalOnceComponent,
    ApoloComponent,
    CtiComponent,
    AplicacionesComponent,
    RepositorioComponent,
    DispositivosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent,
    AccesComponent,
    OrbitComponent,
    BrailleComponent,
    BraillantComponent,
    BrailleLiteComponent,
    IndexComponent,
    PortathielComponent,
    ImpactoComponent,
    JawsComponent,
    NarradorComponent,
    NvdaComponent,
    TalkbackComponent,
    VAssistantComponent,
    VViewComponent,
    VOverComponent,
    AlvaComponent,
    EcoComponent,
    FocusComponent,
    VarioUltraComponent,
    AmpAndroidComponent,
    AmpIosComponent,
    AmpLinuxComponent,
    AmpMacComponent,
    LupaWinComponent,
    ZoomTextComponent,
    BlindShellComponent,
    BmeComponent,
    EbraiComponent,
    EdicoComponent,
    AlexaComponent,
    GoogleAsComponent,
    SiriComponent,
    MecanetComponent,
    MekantaComponent,
    TecladoComponent,
    FineReaderComponent,
    OmniPageComponent,
    GoldComponent,
    MilestoneComponent,
    PlextalkComponent,
    StratusComponent,
    StreamComponent,
    TvlupaComponent,
    StudentComponent,
    TransformerComponent,
    ClubOnceComponent,
    PortalOnceComponent,
    ApoloComponent,
    CtiComponent,
    AplicacionesComponent,
    RepositorioComponent,
    DispositivosComponent
  ],
})
export class ComponentsModule { }
