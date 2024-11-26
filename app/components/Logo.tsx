import Image from 'next/image';

const Logo = () => {
  return (
    <div className="looka-175z8cs">
      <div className="looka-zcxndt looka-1tyndxa looka-5p9vjy looka-k008qs">
        <div className="looka-zcxndt looka-1tyndxa looka-19suvlm looka-k008qs">
          <div
            className="looka-1l1io5o"
            style={{ width: '30px', height: '30px', borderWidth: '3px' }}
          ></div>
        </div>
        <div
          className="looka-fizzqt"
          data-testid="editor-canvas-background"
          style={{ background: 'rgb(23, 185, 120)', boxShadow: 'none' }}
        ></div>
        <div className="looka-1u8s3kb" data-testid="editor-canvas-artboard">
          <div style={{ transform: 'scale(1)' }}>
            <Image width={300} height={150} src="/logo.png" alt="My logo" />
          </div>
        </div>
        <div
          className="looka-125kmow"
          style={{
            top: '204.118px',
            left: '274.244px',
            width: '285.879px',
            height: '71.0423px'
          }}
        ></div>
      </div>
    </div>
  );
};

export default Logo;
