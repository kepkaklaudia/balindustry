export const mainFormData = [
  { label: 'bending', id: 0 },
  { label: 'welding', id: 1 },
  { label: 'spot_welding', id: 2 },
  { label: 'painting', id: 3 },
  { label: 'cnc_processing', id: 4 },
  { label: 'rolling', id: 5 },
  { label: 'mdf_processing_painting', id: 6 },
  { label: 'large_welding', id: 7 },
]

export const satinData = [
  { label: 'satinizing', fieldName: 'satinizing', id: 0 },
  { label: 'blunting', fieldName: 'blunting', id: 1 },
  { label: 'grinding', fieldName: 'grinding', id: 2 },
]

export const satinDataPolish = [
  { label: 'Satynowanie', fieldName: 'satinizing', id: 0 },
  { label: 'Zatępianie krawędzi', fieldName: 'blunting', id: 1 },
  { label: 'Szlifowanie', fieldName: 'grinding', id: 2 },
]

export const roboticStationsData = [
  { label: 'tig', id: 0 },
  { label: 'mig', id: 1 },
  { label: 'laser', id: 2 },
  { label: 'other', id: 3 },
]

export const paintshopsData = [
  { label: 'wet', id: 0 },
  { label: 'powder', id: 1 },
]

export const radioFieldsSection = [
  {
    sectionPathname: 'forms/form',
    labelText: '',
    dataTable: mainFormData,
    requiredMessage: 'select_processing_method',
  },
  {
    sectionPathname: 'robotic-stations',
    labelText: 'select_welding_type',
    dataTable: roboticStationsData,
    requiredMessage: 'select_welding_type_required',
  },
  {
    sectionPathname: 'paintshops',
    labelText: 'select_painting_technology',
    dataTable: paintshopsData,
    requiredMessage: 'select_painting_technology_required',
  },
]

export const additionalInputsSection = [
  {
    sectionPathname: 'robotic-stations',
    fields: [
      {
        requiredMessage: 'max_dimensions_required',
        fieldName: 'maxDimensions',
        label: 'max_dimensions_label',
        placeholder: 'max_dimensions_placeholder',
      },
      {
        requiredMessage: 'weight_required',
        fieldName: 'weight',
        label: 'weight_label',
        placeholder: 'weight_placeholder',
      },
    ],
  },
  {
    sectionPathname: 'furnaces',
    fields: [
      {
        requiredMessage: 'temperature_required',
        fieldName: 'temperature',
        label: 'temperature_label',
        placeholder: 'temperature_placeholder',
      },
      {
        requiredMessage: 'window_dimensions_required',
        fieldName: 'windowDimensions',
        label: 'window_dimensions_label',
        placeholder: 'window_dimensions_placeholder',
      },
    ],
  },
]
