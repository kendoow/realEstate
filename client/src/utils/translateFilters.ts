

export const translateSpecificationsFilters = (specifications: string[]) => {
    return Object.fromEntries(specifications.map(v => {
        switch (v) {
            case 'Бассейн':
                return ['swimmingPool', true]
            case 'Бесплатная парковка на территории':
                return ['freeSiteParking', true]
            case 'Кроватка':
                return ['сrib', true]
            case 'Зона барбекю':
                return ['barbecueArea', true]
            case 'Камин':
                return ['fireplace', true]
            case 'Джакузи':
                return ['jacuzzi', true]
            case 'Зарядка для электромобиля':
                return ['electricСar', true]
            case 'Спортзал':
                return ['gym', true]
            case 'Завтрак':
                return ['breakfast', true]
            case 'Можно курить':
                return ['smoke', true]

            default:
                console.log('Error Filter Specifications')
                return ['default', false]
        }
    }))
}

export const translateNecessaryFilters = (necessary: string[]) => {
    return Object.fromEntries(necessary.map(v => {
        switch (v) {
            case 'WI-FI':
                return ['wifi', true]
            case 'Стиральная Машина':
                return ['washer', true]
            case 'Кондиционер':
                return ['сonditioner', true]
            case 'Отопление':
                return ['heating', true]
            case 'Телевизор':
                return ['tv', true]
            case 'Кухня':
                return ['kitchen', true]
            case 'Сущильная машина':
                return ['dryingMachine', true]
            case 'Рабочая зона':
                return ['workingArea', true]

            default:
                console.log('Error Filter Necessary')
                return ['default', false]
        }
    }))
}

export const translateLanguageFilters = (language: string[]) => {
    return Object.fromEntries(language.map(v => {
        switch (v) {
            case 'Русский':
                return ['russian', true]
            case 'Немецкий':
                return ['german', true]
            case 'Французский':
                return ['french', true]
            case 'Японский':
                return ['japanese', true]
            case 'Английский':
                return ['english', true]

            default:
                console.log('Error Filter Language')
                return ['default', false]
        }
    }))
}

export const translateHomeFilters = (home: string[]) => {
    return Object.fromEntries(home.map(v => {
        switch (v) {
            case 'Огороженная территория':
                return ['fencedArea', true]
            case 'Парковка крытая':
                return ['сoveredParking', true]
            case 'Стояночное место':
                return ['parkingSpace', true]
            case 'Виодеонаблюдение':
                return ['video', true]

            default:
                console.log('Error FIlter Home')
                return ['default', false]
        }
    }))
}