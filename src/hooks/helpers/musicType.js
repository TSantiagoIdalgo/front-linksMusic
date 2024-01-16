export const fileType = (file) => {
    if (!file) return true;
  
    const fileExtension = file.name.slice(-3);
    if (!isAudioExtension(fileExtension)) return true;
  
    return false;
  };
  
  
  const isAudioExtension = (extension) => {
    return ['mp3', 'wav', 'ogg', 'wma', 'flac', 'alac', 'aac', 'ac3']
      .includes(extension.toLowerCase());
  };