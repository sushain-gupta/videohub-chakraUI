import { Box, HStack, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Sidebar from '../../components/global/Sidebar';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

export default function Previews(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt={file.name}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <HStack
      height={'78vh'}
      width={'full'}
      alignItems={'center'}
      justifyItems={'center'}
      justifyContent={'center'}
      padding={'5'}
    >
      <Sidebar />
      <Box
        className="container"
        background={'gray.200'}
        width={'2xl'}
        textAlign={'center'}
        borderRadius={'2xl'}
        padding={'5'}
      >
        <Box
          height={'28'}
          justifyContent={'center'}
          display={'flex'}
          padding={'10'}
          // background={'gray.700'}
          // textColor={'gray.200'}
          border={'2px'}
          borderStyle={'dashed'}
          borderColor={'gray.500'}
          borderRadius={'2xl'}
          {...getRootProps({ className: 'dropzone' })}
        >
          <Input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </Box>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </Box>
      {/* </Box> */}
    </HStack>
  );
}
