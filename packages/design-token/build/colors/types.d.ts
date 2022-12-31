declare const knownColorGroupNames: readonly ["white", "gray", "carrot", "yellow", "green", "red", "blue"];
export declare type KnownColorGroup = typeof knownColorGroupNames[number];
export declare function isKnownColorGroup(str: string): str is KnownColorGroup;
declare type MakeTokenSet<TGroup extends KnownColorGroup, TLightness extends number[]> = `$${TGroup}${TLightness[number]}`;
export declare type ColorToken = "$white" | MakeTokenSet<"gray", [100, 200, 300, 400, 500, 600, 700, 900]>;
export declare type ColorScheme = Record<ColorToken, string>;
export declare type SemanticColorScheme = {
    background: ColorToken | string;
};
export declare type ColorTheme = {
    /**
     * Raw color tokens
     */
    scheme: ColorScheme;
    /**
     * Sematic color object (isn't eagerly populated)
     */
    semanticScheme: SemanticColorScheme;
};
export {};
