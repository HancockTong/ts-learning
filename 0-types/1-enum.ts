export enum NetworkType {
    None,
    Wifi,
    Edge,
    Unknown
};

export function getNetworkType(): NetworkType {
    return NetworkType.Wifi;
};

export function getNameOfNetworkType(type: NetworkType): string {
    return NetworkType[type];
}

export namespace NetworkType {
    export function getResolution(type: NetworkType) {
        switch (type) {
            case NetworkType.Wifi:
                return 'high';
            case NetworkType.Edge:
                return 'low';
            default: 
                return 'none';
        }
    }
}

export const  enum ConstNetworkType {
    None,
    Wifi,
    Edge,
    Unknown
}

export function getConstNetworkType(): ConstNetworkType {
    return ConstNetworkType.Edge;
}