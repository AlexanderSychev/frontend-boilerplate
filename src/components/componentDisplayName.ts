let uniqueId = -1;

const getUniqueId = () => {
    uniqueId += 1;
    return uniqueId;
};

export default (componentName: string, filename: string): string =>
    process.env.APP_ENV === 'development' ? `${componentName} from "${filename}"` : `cmp${getUniqueId()}`;
