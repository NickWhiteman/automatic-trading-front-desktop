export const renderButton = (children: any, buttonMode: string) => {
  switch (buttonMode) {
    case 'Primary':
      return <button className={`button__${buttonMode}`}>{children}</button>;
    case 'Light':
      return <button className={`button__${buttonMode}`}>{children}</button>;
    case 'Success':
      return <button className={`button__${buttonMode}`}>{children}</button>;
    case 'Danger':
      return <button className={`button__${buttonMode}`}>{children}</button>;
    case 'Warning':
      return <button className={`button__${buttonMode}`}>{children}</button>;
    case 'Info':
      return <button className={`button__${buttonMode}`}>{children}</button>;
    default: return <></>
  }
};