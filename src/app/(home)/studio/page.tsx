'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import tinycolor from 'tinycolor2';

import { TYPES, COLORS, SIZES } from '@root/configs';
import { LIB_VERSION } from '@root/version';

import { TypePicker } from '@components/TypePicker';
import { SizePicker } from '@components/SizePicker';
import { ColorPicker } from '@components/ColorPicker';
import { DownloadButton } from '@components/DownloadButton';
import { Cursors } from '@components/Cursors';

import { genAccessToken } from '@utils/auth/token';

import { Image } from 'bibata/app';

export default function StudioPage() {
  const [type, setType] = useState(TYPES[0]);
  const [cursorSize, setCursorSize] = useState(SIZES[3]);

  const [colorName, setColorName] = useState('Amber');
  const [color, setColor] = useState(COLORS[colorName]);
  const bg = tinycolor.mix(color.base, '#0f0f0f', 98);

  // TODO: access version with page parameter `v`
  // example: bibata/studio?v=1.0.0-alpha
  // eslint-disable-next-line no-unused-vars
  const [version, setVersion] = useState(LIB_VERSION);

  const [images, setImages] = useState<Image[]>([]);
  const [imagesCount, setImagesCount] = useState(0);

  const { data: session, status, update } = useSession();
  const [token, setToken] = useState(genAccessToken());

  const resetImages = () => {
    setImages([]);
    setImagesCount(0);
  };

  const refreshToken = () => {
    if (session?.user) {
      setToken(genAccessToken(session.user));
    } else {
      setToken(genAccessToken());
    }
  };

  useEffect(() => {
    if (status !== 'loading') {
      refreshToken();
    }
  }, [status, update]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main
      style={{
        background: `radial-gradient(circle, ${bg.toHexString()} 10%, ${bg
          .lighten(2)
          .toHexString()})`
      }}>
      <div className='container m-auto p-7'>
        <TypePicker
          list={TYPES}
          value={type}
          onClick={(v) => {
            resetImages();
            setType(v);
            refreshToken();
          }}
        />

        <div className='mt-5'>
          <SizePicker
            list={SIZES}
            values={cursorSize}
            onClick={(s) => {
              setCursorSize(s);
              refreshToken();
            }}
          />
        </div>

        <div className='mt-10'>
          <ColorPicker
            colorName={colorName}
            colors={COLORS}
            onClick={(n, c) => {
              resetImages();
              setColorName(n);
              setColor(c);
              refreshToken();
            }}
          />
        </div>

        <div className='my-10'>
          <DownloadButton
            auth={token}
            version={version}
            disabled={images.length === 0}
            lock={imagesCount === 0 || imagesCount !== images.length}
            config={{
              size: cursorSize,
              color,
              images,
              type
            }}
          />
        </div>

        <Cursors
          type={type}
          version={version}
          color={color}
          onData={(svgs) => setImagesCount(svgs.length)}
          onLoad={(i, loading) => {
            const l = images;
            const index = l.findIndex((e) => e.name === i.name);
            if (index >= 0) {
              loading ? l.splice(index, 1) : (l[index] = i);
            } else if (!loading) {
              l.push(i);
            }
            setImages([...l]);
          }}
        />
      </div>
    </main>
  );
}
