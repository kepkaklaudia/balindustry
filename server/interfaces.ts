import { type IDxf } from 'dxf-parser'

export interface File {
  size: number
  type: string
  name: string
  lastModified: number
  path: string
}

export interface DxfFile {
  header: {
    $ACADVER: string
    $ACADMAINTVER: number
    $DWGCODEPAGE: string
    $REQUIREDVERSIONS: number
    $INSBASE: {
      x: number
      y: number
      z: number
    }
    $EXTMIN: {
      x: number
      y: number
      z: number
    }
    $EXTMAX: {
      x: number
      y: number
      z: number
    }
    $LIMMIN: {
      x: number
      y: number
    }
    $LIMMAX: {
      x: number
      y: number
    }
    $ORTHOMODE: number
    $REGENMODE: number
    $FILLMODE: number
    $QTEXTMODE: number
    $MIRRTEXT: number
    $LTSCALE: number
    $ATTMODE: number
    $TEXTSIZE: number
    $TRACEWID: number
    $TEXTSTYLE: string
    $CLAYER: string
    $CELTYPE: string
    $CECOLOR: number
    $CELTSCALE: number
    $DISPSILH: number
    $DIMSCALE: number
    $DIMASZ: number
    $DIMEXO: number
    $DIMDLI: number
    $DIMRND: number
    $DIMDLE: number
    $DIMEXE: number
    $DIMTP: number
    $DIMTM: number
    $DIMTXT: number
    $DIMCEN: number
    $DIMTSZ: number
    $DIMTOL: number
    $DIMLIM: number
    $DIMTIH: number
    $DIMTOH: number
    $DIMSE1: number
    $DIMSE2: number
    $DIMTAD: number
    $DIMZIN: number
    $DIMBLK: string
    $DIMASO: number
    $DIMSHO: number
    $DIMPOST: string
    $DIMAPOST: string
    $DIMALT: number
    $DIMALTD: number
    $DIMALTF: number
    $DIMLFAC: number
    $DIMTOFL: number
    $DIMTVP: number
    $DIMTIX: number
    $DIMSOXD: number
    $DIMSAH: number
    $DIMBLK1: string
    $DIMBLK2: string
    $DIMSTYLE: string
    $DIMCLRD: number
    $DIMCLRE: number
    $DIMCLRT: number
    $DIMTFAC: number
    $DIMGAP: number
    $DIMJUST: number
    $DIMSD1: number
    $DIMSD2: number
    $DIMTOLJ: number
    $DIMTZIN: number
    $DIMALTZ: number
    $DIMALTTZ: number
    $DIMUPT: number
    $DIMDEC: number
    $DIMTDEC: number
    $DIMALTU: number
    $DIMALTTD: number
    $DIMTXSTY: string
    $DIMAUNIT: number
    $DIMADEC: number
    $DIMALTRND: number
    $DIMAZIN: number
    $DIMDSEP: number
    $DIMATFIT: number
    $DIMFRAC: number
    $DIMLDRBLK: string
    $DIMLUNIT: number
    $DIMLWD: number
    $DIMLWE: number
    $DIMTMOVE: number
    $DIMFXL: number
    $DIMFXLON: number
    $DIMJOGANG: number
    $DIMTFILL: number
    $DIMTFILLCLR: number
    $DIMARCSYM: number
    $DIMLTYPE: string
    $DIMLTEX1: string
    $DIMLTEX2: string
    $DIMTXTDIRECTION: number
    $LUNITS: number
    $LUPREC: number
    $SKETCHINC: number
    $FILLETRAD: number
    $AUNITS: number
    $AUPREC: number
    $MENU: string
    $ELEVATION: number
    $PELEVATION: number
    $THICKNESS: number
    $LIMCHECK: number
    $CHAMFERA: number
    $CHAMFERB: number
    $CHAMFERC: number
    $CHAMFERD: number
    $SKPOLY: number
    $TDCREATE: number
    $TDUCREATE: number
    $TDUPDATE: number
    $TDUUPDATE: number
    $TDINDWG: number
    $TDUSRTIMER: number
    $USRTIMER: number
    $ANGBASE: number
    $ANGDIR: number
    $PDMODE: number
    $PDSIZE: number
    $PLINEWID: number
    $SPLFRAME: number
    $SPLINETYPE: number
    $SPLINESEGS: number
    $HANDSEED: string
    $SURFTAB1: number
    $SURFTAB2: number
    $SURFTYPE: number
    $SURFU: number
    $SURFV: number
    $UCSBASE: string
    $UCSNAME: string
    $UCSORG: {
      x: number
      y: number
      z: number
    }
    $UCSXDIR: {
      x: number
      y: number
      z: number
    }
    $UCSYDIR: {
      x: number
      y: number
      z: number
    }
    $UCSORTHOREF: string
    $UCSORTHOVIEW: number
    $UCSORGTOP: {
      x: number
      y: number
      z: number
    }
    $UCSORGBOTTOM: {
      x: number
      y: number
      z: number
    }
    $UCSORGLEFT: {
      x: number
      y: number
      z: number
    }
    $UCSORGRIGHT: {
      x: number
      y: number
      z: number
    }
    $UCSORGFRONT: {
      x: number
      y: number
      z: number
    }
    $UCSORGBACK: {
      x: number
      y: number
      z: number
    }
    $PUCSBASE: string
    $PUCSNAME: string
    $PUCSORG: {
      x: number
      y: number
      z: number
    }
    $PUCSXDIR: {
      x: number
      y: number
      z: number
    }
    $PUCSYDIR: {
      x: number
      y: number
      z: number
    }
    $PUCSORTHOREF: string
    $PUCSORTHOVIEW: number
    $PUCSORGTOP: {
      x: number
      y: number
      z: number
    }
    $PUCSORGBOTTOM: {
      x: number
      y: number
      z: number
    }
    $PUCSORGLEFT: {
      x: number
      y: number
      z: number
    }
    $PUCSORGRIGHT: {
      x: number
      y: number
      z: number
    }
    $PUCSORGFRONT: {
      x: number
      y: number
      z: number
    }
    $PUCSORGBACK: {
      x: number
      y: number
      z: number
    }
    $USERI1: number
    $USERI2: number
    $USERI3: number
    $USERI4: number
    $USERI5: number
    $USERR1: number
    $USERR2: number
    $USERR3: number
    $USERR4: number
    $USERR5: number
    $WORLDVIEW: number
    $SHADEDGE: number
    $SHADEDIF: number
    $TILEMODE: number
    $MAXACTVP: number
    $PINSBASE: {
      x: number
      y: number
      z: number
    }
    $PLIMCHECK: number
    $PEXTMIN: {
      x: number
      y: number
      z: number
    }
    $PEXTMAX: {
      x: number
      y: number
      z: number
    }
    $PLIMMIN: {
      x: number
      y: number
    }
    $PLIMMAX: {
      x: number
      y: number
    }
    $UNITMODE: number
    $VISRETAIN: number
    $PLINEGEN: number
    $PSLTSCALE: number
    $TREEDEPTH: number
    $CMLSTYLE: string
    $CMLJUST: number
    $CMLSCALE: number
    $PROXYGRAPHICS: number
    $MEASUREMENT: number
    $CELWEIGHT: number
    $ENDCAPS: number
    $JOINSTYLE: number
    $LWDISPLAY: boolean
    $INSUNITS: number
    $HYPERLINKBASE: string
    $STYLESHEET: string
    $XEDIT: boolean
    $CEPSNTYPE: number
    $PSTYLEMODE: boolean
    $FINGERPRINTGUID: string
    $VERSIONGUID: string
    $EXTNAMES: boolean
    $PSVPSCALE: number
    $OLESTARTUP: boolean
    $SORTENTS: number
    $INDEXCTL: number
    $HIDETEXT: number
    $XCLIPFRAME: number
    $HALOGAP: number
    $OBSCOLOR: number
    $OBSLTYPE: number
    $INTERSECTIONDISPLAY: number
    $INTERSECTIONCOLOR: number
    $DIMASSOC: number
    $PROJECTNAME: string
    $CAMERADISPLAY: boolean
    $LENSLENGTH: number
    $CAMERAHEIGHT: number
    $STEPSPERSEC: number
    $STEPSIZE: number
    $3DDWFPREC: number
    $PSOLWIDTH: number
    $PSOLHEIGHT: number
    $LOFTANG1: number
    $LOFTANG2: number
    $LOFTMAG1: number
    $LOFTMAG2: number
    $LOFTPARAM: number
    $LOFTNORMALS: number
    $LATITUDE: number
    $LONGITUDE: number
    $NORTHDIRECTION: number
    $TIMEZONE: number
    $LIGHTGLYPHDISPLAY: number
    $TILEMODELIGHTSYNCH: number
    $CMATERIAL: string
    $SOLIDHIST: number
    $SHOWHIST: number
    $DWFFRAME: number
    $DGNFRAME: number
    $REALWORLDSCALE: boolean
    $INTERFERECOLOR: number
    $INTERFEREOBJVS: string
    $INTERFEREVPVS: string
    $CSHADOW: number
    $SHADOWPLANELOCATION: number
  }
  tables: {
    viewPort: {
      handle: string
      ownerHandle: string
      viewPorts: {
        handle: string
        ownerHandle: string
        viewPorts: Array<{
          ownerHandle: string
          name: string
          lowerLeftCorner: [Object]
          upperRightCorner: [Object]
          center: [Object]
          snapBasePoint: [Object]
          snapSpacing: [Object]
          gridSpacing: [Object]
          viewDirectionFromTarget: [Object]
          viewTarget: [Object]
          lensLength: number
          frontClippingPlane: number
          backClippingPlane: number
          snapRotationAngle: number
          viewTwistAngle: number
          renderMode: number
          ucsOrigin: [Object]
          ucsXAxis: [Object]
          ucsYAxis: [Object]
          orthographicType: number
          defaultLightingOn: boolean
          ambientColor: number
        }>
      }
    }
    lineType: {
      handle: string
      ownerHandle: string
      lineTypes: [Object]
    }
    layer: {
      handle: string
      ownerHandle: string
      layers: [Object]
    }
  }
  blocks: {
    '*Model_Space': {
      handle: string
      ownerHandle: string
      layer: string
      name: string
      position: [Object]
      name2: string
      xrefPath: string
    }
    '*Paper_Space': {
      handle: string
      ownerHandle: string
      paperSpace: boolean
      layer: string
      name: string
      position: [Object]
      name2: string
      xrefPath: string
    }
    '*Paper_Space0': {
      handle: string
      ownerHandle: string
      paperSpace: boolean
      layer: string
      name: string
      position: [Object]
      name2: string
      xrefPath: string
    }
  }
  entities: Array<{
    type: string
    vertices: Array<{
      type: string
      handle: string
      ownerHandle: string
      layer: string
      bulge: number
      x: number
      y: number
      z: number
    }>
    handle: string
    ownerHandle: string
    layer: string
    shape: boolean
    includesCurveFitVertices: boolean
    includesSplineFitVertices: boolean
    is3dPolyline: boolean
    is3dPolygonMesh: boolean
    is3dPolygonMeshClosed: boolean
    isPolyfaceMesh: boolean
    hasContinuousLinetypePattern: boolean
    radius: number
    center: {
      x: number
      y: number
      z: number
    }
    startAngle: number
    endAngle: number
    controlPoints: Array<{
      x: number
      y: number
    }>
  }>
}
export interface FileData {
  fileName: string
  fileContent: IDxf
  path: string
  units: string
  totalLength: string
  arrayLength: Array<{ type: string; length: number; elements?: number[] }>
  modelJson: null
  quantity: number | null
  material: string | null
  thickness: number | null
  density: number | null
  isReady: boolean
  totalArea: number
}
