export function formatJSON(json: string): string {
    try {
        const parsed = JSON.parse(json);
        return JSON.stringify(parsed, null, 2);
    } catch (e) {
        return "Invalid JSON";
    }
}

export function minifyJSON(json: string): string {
    try {
        const parsed = JSON.parse(json);
        return JSON.stringify(parsed);
    } catch (e) {
        return "Invalid JSON";
    }
}

export function formatXML(xml: string): string {
    try {
        // Simple XML formatting - in a real application, you might want to use a more robust XML parser
        return xml.replace(/></g, ">\n<");
    } catch (e) {
        return "Invalid XML";
    }
}

export function minifyXML(xml: string): string {
    try {
        // Simple XML minification - in a real application, you might want to use a more robust XML parser
        return xml.replace(/\s+/g, " ").trim();
    } catch (e) {
        return "Invalid XML";
    }
}