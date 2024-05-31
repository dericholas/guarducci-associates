'use client'
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const Projects = () => {
    const photos = [
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczNmCeG-4do92j0Zy38VSBSdNaZHGaT6yPeMU0a3ttA6jcVEj50YX9lx_7ZsLF1r7r8RSCDhIjpr49nvVzxgd0OWTTeMPJG4enXY_vsjYPQMfEtmP_yT=w1920-h1080",
          height: 900,
          width: 1600,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczOjdlshpeRKBXjZntw8_CUayzNPez1J0M47jk0EQilwp8FTMALS0Kvr16HeR1C9Y1pxNvh2RerT693opN5DyvbtMuG-qs4JDtGr4gFnPnc6IE5Xizaw=w1920-h1080",
          height: 422,
          width: 750,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczM2nD0h8tsBSLmOtMib2S92O9suqFTS2aY3C_s5LZIpL6k17DMMUWXtYUDbYAPU9VaWiJzLQV3m0Lj5CzDU90q12cRe3eJ2K0-fWEy5uYxnEVNn9KW7=w1920-h1080",
          height: 900,
          width: 1600,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczNrD7GO4HGsH5jzoWXjHP3tn8gWN0rappGP0Ai6GtZWdzckxmkNtpO3oaTiFDWT80Zf_qwlb7jTkpV1EAMFLM97R7RH-zUfIatGO-qqxqb9_VMoaMMg=w1920-h1080",
          height: 422,
          width: 750,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczOYdxHg6-IogEMOD_VhLsNN1HO-XFKyXvEMCkhGjKOS_m6NieIEK6ymc6MYuyi3l6PmRu_SWSOxbnSBsc9CvTIv8t9fqi1SknglqdlnheIAaybWsArz=w1920-h1080",
          height: 422,
          width: 750,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczPh8egMDrbeL8e38Rhz7s6UFt_Jm9yAH81ATPcRB9oLDK2UikzXcPiYlFkJj_2ZD2r5kWpd0DhJTr561EBaiujfrKHKFAU3cO-UuFaEUryW0jdD2vpb=w1920-h1080",
          height: 900,
          width: 1600,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczNpTmeCw6U4S9IcIjaVDQvFnokhFsTmcBdz4gbkj1Tl3y-cXb-45cL0SCUH-fep3WUi954Ho8hBC-vgXj1KYIvtIGt8m34W8nIankyFyfAT-WLVsVGp=w1920-h1080",
          height: 281,
          width: 500,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczNQmP2qNkDfBcKfDJ8YAoJGWUPY6QQCzkZic4TEbn_kZ95iImX-qVx523pS42_CvOzMPEvSETyK_ZP5QMq6hD-FWlRVhdE9r_LsNJM5Cg7-P5wzZo1m=w1920-h1080",
          height: 281,
          width: 500,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczMv27tcgK0dZN-FXuO6CHdMHCAmLa5Z1hvzjcfIM2q4AN3TLJuIlLyiHyPLNGOkhr73JfbknTKVL3Y3KwGdaiiAfZKRLtKdVxELOMj3HXqPoRirT5Hv=w1920-h1080",
          height: 281,
          width: 500,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczMGtwMoHs0kCH5k0syqY0H3P8GbbsCCcV2ITGIQ2g3Q_NqHpBRc4VdlZPO2URlZ-oxY_1oKkU-Dc9ZN1wfGFyIEF9y2sdyK8KvA3e4OGdzd0tibI7ah=w1920-h1080",
          height: 281,
          width: 500,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczO56T1vT0fZeIp6Y8W28X0dLOlSvG6eyKK-2oBxClL52f-WR0RI2J7CWZ1TVjS_AA_qqT2QO7R6tlXjoGzM-lVPckNwFnkw26z5KYhycoswQLGkMiVu=w1920-h1080",
          height: 900,
          width: 1600,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczNtMVXTWFh9x_gHPhMnh5-DEzXumC7npfuAhOJdogxt230ufe-74a0uNYdewaUUlZtItBQ3zts1uVMMn0E1yodmSjyJWj0IMeE5ikXHuj1k1LMZfyqK=w1920-h1080",
          height: 900,
          width: 1600,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczNooUDDHFOzE3MbKYxG60QtcltUrJZaNJRHn08wfY0eDps8P7zwqI17VDCbPv-_P0ckALXE6_wbquD-qg-Aw8u_j_kDVQh_g7Kqcn2YAAmDIP9PlOYt=w1920-h1080",
          height: 900,
          width: 1600,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczMplk09hGW9Qr_3_kyqprC1_TBC3ol7XySbeV_Qod7YMCC_BNlco0syDoEn9WAuFUnzydPIQZPMUUgZ0KR4Q2NjebeYyllWiPO98D5Sxl29NvrZ4k-M=w1920-h1080",
          height: 900,
          width: 1600,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczPnVvZ0aO-z20Wcxj3tlQ8W1rYwRwCthldpkb_GXVFHaLSjs8vE4YPpr0FclqwMW6kJ5v8Znst1CCll2GHyJLCQjx01ylncqAangLuEEPE_CFgNDXJr=w1920-h1080",
          height: 900,
          width: 1600,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczMYIOHrNBhfVwUOv7m9Y0iI3TbNuGS9FiJ8hJ_YAwzJVN7QYB8lsV4jL1wv7McjFA6B_QTq48Y1ZhbpVE0DBToSiosZg1y5-0fXGagdsMd5t43zkHpO=w1920-h1080",
          height: 900,
          width: 1600,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczN_saXPVrUWPs5oAkLfhZO153pG8TmXLdd_X1sqeounWLvGijY9UE-zrTbQTMJgopxUYPo_G6VX7x4rUx3WtaZLcfS7Z9fqKpI8gWjARjBN-eEq0okc=w1920-h1080",
          height: 422,
          width: 750,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczO5bpZGZjxNi9TiaUp4pwRFl2h6LF-Wpg4eYEW20gzphUCeiNW2LgacdK-2pqWYIbLHWYFWYvr7p-e1PB6v8nG0YNpsVOopj4pCi0dzBSoZ5lc72PuE=w1920-h1080",
          height: 900,
          width: 1600,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczPha2wetddgalSOnyAtlssVqLYZy_Ru5-LBWI7RpUigM3ammE1R5-T4B9NZvbjJIJEJwpSX72l8sJvMzSnkeuahSVJCqE-_GcR9g6HQmDkjqu5HwBDE=w1920-h1080",
          height: 281,
          width: 500,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczMFGyZc55xJakUhiXAObH-UTxDK89nRo9_T7i25kvsJ9dZtJc96AMC-sXraNElNhfYqR2-_y748xezu9YiTQq3DuYhvD71ie5x2LZtcxRmQNWaFWbv_=w1920-h1080",
          height: 281,
          width: 500,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczP0XQWq5ANaWGx74SQUlLUUUQSz3lx-KYegUkYo9Hu47wwNgEEEBc5jeZg7_iDR1IC_8p3CtHHzYLnwdU49r9su9DATu4CPNQwIEYmtvnvF0vn960lA=w1920-h1080",
          height: 900,
          width: 1600,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczMBV7tXfg4FEh2XFeGxgMWcukGe9fHaJ3zpY4cxiPleUV5dZzIVbLh7OnuRMQTfndIsnCwb_P3KeqpUed7ertVFpBQgDrbLiS1l3-fFGlr-fMaT7I0f=w1920-h1080",
          height: 422,
          width: 750,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczOWNgXWk92dkLIHm8_3Uze0atZnMe7djVND0r7HjrYXuxJoybrVQNapA_eoRkwB42vdcAfdoz220AcxO3Vd5Co1wqJh-5xGGqLRADTRV3viRy03Yx6r=w1920-h1080",
          height: 281,
          width: 500,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczOIlPqf4HzwFfXIlNO_-riZMgFXyQXtxzFrNFK2m82hINy7E6U8grL5sGIQUHccvaBOnodDi3BAnzs_a-gnJ5wH36I0aEoA0jjkbOIe97uGmao9CWHS=w1920-h1080",
          height: 281,
          width: 500,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczM39y2cBgNfry7XIj_w3pok1QS7DQ2DFCFPxAEkYNUlO5R13tGVODIfttlo_UNOQ5H9JC0FjnyKhxer6PIQep2Zr3005pWRlt9nOehi83n3_6ZXA1Z5=w1920-h1080",
          height: 422,
          width: 750,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczMQR_4VwCfzDMn2eqxxVgm8enClvpe-5_NK2nwYOAJRdjstwgRNSbYfUjeH80XJyyVtQARIjo4d0uuXLO-UqCOGdBrK4sTfYWGAX8e-rCi_uzwG_Odr=w1920-h1080",
          height: 900,
          width: 1600,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczM141vxSbTMftDoaEof7lixOgFZfBoR51twYPrtQ0UTKQ2klt474mGM47C0w8w3CnG-a6ogTI9NeO-McFQTToqftkwaotQ6xvAaVuECeKbfOElcEiag=w1920-h1080",
          height: 900,
          width: 1600,
        },
        {
          src: "https://lh3.googleusercontent.com/pw/AP1GczOsMtn2zeNyk5QPRYzvF4ZiUn7doO3y6BpcQ7k6R0w9XW_bHQJMGf1uBlcaQauq1_Voxj4f0Gj_sbxi3D-cbWzEDiBF1IkKCVjBu8jzIkeapR9dmUVz=w1920-h1080",
          height: 422,
          width: 750,
        },
      ];
      const [currentImage, setCurrentImage] = useState(0);
      const [viewerIsOpen, setViewerIsOpen] = useState(false);
    
      const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
      }, []);
    
      const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      };
    
      return (
        <div className="projects-gallery">
          <Gallery photos={photos} onClick={openLightbox} margin={3}/>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      );
}
export default Projects