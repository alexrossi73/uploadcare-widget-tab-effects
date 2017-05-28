import initialSettings from '../initial-settings'

const getSettingsEffects = (value) => {
  let settingsEffects = []

  if (typeof value === 'string') {
    settingsEffects = value.replace(/\s/g, '').split(',')
  }
  else if (Array.isArray(value)) {
    settingsEffects = value
  }
  else {
    settingsEffects = initialSettings.effects
  }

  const crop = settingsEffects.indexOf('crop')

  if (!!~crop && (crop !== (settingsEffects.length - 1))) {
    settingsEffects.splice(crop, 1)
    settingsEffects.push('crop')
  }

  return settingsEffects
}

export default getSettingsEffects