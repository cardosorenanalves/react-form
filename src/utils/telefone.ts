export const telefonemask = (value: string) => {
    if (value == null) {return}
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{1})(\d)/, '+$1$2');
    value = value.replace(/(\d{2})(\d)/, '$1($2');
    value = value.replace(/(\d{2})(\d)/, '$1)$2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    return value.substr(0, 17);
  };

